import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { bookingSchema } from '@/lib/validations/booking'

const resend = new Resend(process.env.RESEND_API_KEY)

const serviceLabels: Record<string, string> = {
  'coupe-homme':  'Coupe Homme (12 €)',
  'coupe-enfant': 'Coupe Enfant (10 €)',
  'barbe':        'Barbe (5 €)',
  'coupe-barbe':  'Coupe + Barbe (16 €)',
}

export async function POST(request: NextRequest) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ success: false, error: 'Corps de requête invalide' }, { status: 400 })
  }

  const parsed = bookingSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { success: false, error: parsed.error.flatten().fieldErrors },
      { status: 422 }
    )
  }

  const { prenom, nom, telephone, email, service, date, heure, message } = parsed.data

  const salonEmail = process.env.SALON_EMAIL
  if (!salonEmail) {
    console.error('SALON_EMAIL environment variable is not set')
    return NextResponse.json({ success: false, error: 'Configuration serveur manquante' }, { status: 500 })
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://3coiffeurs.fr'
  const domain = new URL(siteUrl).hostname

  try {
    await resend.emails.send({
      from: `3 Coiffeurs <noreply@${domain}>`,
      to: salonEmail,
      subject: `Nouvelle demande de RDV — ${prenom} ${nom}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1A1A1A;">
          <div style="background: #8B1A1A; padding: 24px 32px;">
            <h1 style="color: #ffffff; margin: 0; font-size: 22px;">Nouvelle demande de rendez-vous</h1>
            <p style="color: #ffffff; opacity: 0.8; margin: 4px 0 0; font-size: 14px;">3 Coiffeurs — Nanterre</p>
          </div>
          <div style="padding: 32px; background: #ffffff; border: 1px solid #e5e7eb; border-top: none;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-weight: bold; width: 40%;">Client</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">${prenom} ${nom}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-weight: bold;">Téléphone</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;"><a href="tel:${telephone}">${telephone}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-weight: bold;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-weight: bold;">Prestation</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">${serviceLabels[service]}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-weight: bold;">Date souhaitée</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">${date}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-weight: bold;">Heure souhaitée</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">${heure}</td>
              </tr>
              ${message ? `
              <tr>
                <td style="padding: 10px 0; font-weight: bold; vertical-align: top;">Message</td>
                <td style="padding: 10px 0; white-space: pre-wrap;">${message}</td>
              </tr>` : ''}
            </table>
          </div>
          <div style="padding: 16px 32px; background: #F5F0E8; font-size: 12px; color: #6b7280; text-align: center;">
            Demande envoyée via le formulaire de réservation de 3coiffeurs.fr
          </div>
        </div>
      `,
    })

    // Confirmation email to client (non-blocking)
    try {
      await resend.emails.send({
        from: `3 Coiffeurs <noreply@${domain}>`,
        to: email,
        subject: `Votre demande de RDV chez 3 Coiffeurs`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1A1A1A;">
            <div style="background: #8B1A1A; padding: 24px 32px;">
              <h1 style="color: #ffffff; margin: 0; font-size: 22px;">Demande de rendez-vous reçue</h1>
              <p style="color: #ffffff; opacity: 0.8; margin: 4px 0 0; font-size: 14px;">3 Coiffeurs — Nanterre</p>
            </div>
            <div style="padding: 32px; background: #ffffff; border: 1px solid #e5e7eb; border-top: none;">
              <p style="margin: 0 0 24px; font-size: 15px;">Bonjour ${prenom},</p>
              <p style="margin: 0 0 24px; font-size: 15px;">
                Nous avons bien reçu votre demande de rendez-vous. <strong>Ceci est une demande, pas encore une confirmation.</strong>
                Nous vous contacterons dans les plus brefs délais pour confirmer votre créneau.
              </p>
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-weight: bold; width: 40%;">Prestation</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">${serviceLabels[service]}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-weight: bold;">Date souhaitée</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">${date}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; font-weight: bold;">Heure souhaitée</td>
                  <td style="padding: 10px 0;">${heure}</td>
                </tr>
              </table>
              <div style="background: #F5F0E8; border-radius: 4px; padding: 16px 20px; font-size: 14px;">
                <p style="margin: 0 0 6px; font-weight: bold;">3 Coiffeurs</p>
                <p style="margin: 0 0 4px;">📍 3 Rue Henri Barbusse, 92000 Nanterre</p>
                <p style="margin: 0;">📞 <a href="tel:+33766082702" style="color: #8B1A1A;">07 66 08 27 02</a></p>
              </div>
            </div>
            <div style="padding: 16px 32px; background: #F5F0E8; font-size: 12px; color: #6b7280; text-align: center;">
              Ouvert 7j/7 · 09:00 – 20:30
            </div>
          </div>
        `,
      })
    } catch (clientEmailError) {
      console.warn('Client confirmation email failed (non-blocking):', clientEmailError)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Resend error:', error)
    return NextResponse.json({ success: false, error: 'Erreur lors de l\'envoi de l\'email' }, { status: 500 })
  }
}
