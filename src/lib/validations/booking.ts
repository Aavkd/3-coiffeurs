import { z } from 'zod'

export const bookingSchema = z.object({
  prenom:    z.string().min(2, 'Prénom requis (min. 2 caractères)'),
  nom:       z.string().min(2, 'Nom requis (min. 2 caractères)'),
  telephone: z.string().regex(/^(\+33|0)[1-9](\d{8})$/, 'Numéro de téléphone invalide'),
  email:     z.string().email('Adresse email invalide'),
  service:   z.enum(['coupe-homme', 'coupe-enfant', 'barbe', 'coupe-barbe']),
  date:      z.string().min(1, 'Date requise'),
  heure:     z.string().min(1, 'Heure requise'),
  message:   z.string().optional(),
  rgpd:      z.literal(true, { message: 'Vous devez accepter les conditions' }),
})

export type BookingFormData = z.infer<typeof bookingSchema>
