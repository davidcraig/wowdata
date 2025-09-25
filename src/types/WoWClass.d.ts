import type { Role } from '@davidcraig/wowdata/Role'

export type WoWClass = {
  name: string
  css: string
  roles?: Role[]
  img?: string
  discord?: string[] | string
  specs?: {
    name: string
    key: string
    role: Role
    img?: string
    guides?: { name: string, url: string }[]
  }[]
  guides?: { name: string, url: string }[]
}
