import type { Role } from '../types/Role'

export const ROLES: Record<string, Role> = {
  DPS: { name: 'DPS', icon: '/img/wow/dps.png' },
  Tank: { name: 'Tank', icon: '/img/wow/tank.png' },
  Healer: { name: 'Healer', icon: '/img/wow/healer.png' },
}

export default ROLES
