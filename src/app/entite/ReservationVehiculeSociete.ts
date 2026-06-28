import { Time } from '@angular/common'
import { Collegue } from '../auth/auth.domains'
import { Vehicule } from './Vehicule'

export class ReservationVehiculeSociete {
    vehicule: Vehicule
    dateEmprun: Date
    heureEmprun: Time
    dateRestitution: Date
    heureRestitution: Time
    reserverPar: Collegue
}