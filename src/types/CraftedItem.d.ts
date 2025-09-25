import { Rarity } from "../data/enum/Rarity"
import type { Material } from "./Material"

export type Reagent = Material & { quantity?: number }

export type CraftedItem = {
    id?: number
    name: string
    icon?: string
    rarity?: Rarity
    type: string
    url?: string
    materials: Reagent[]
}
