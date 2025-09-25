import type { WoWClass } from "@davidcraig/wowdata/WoWClass"
import type { CraftedItem } from "@davidcraig/wowdata/CraftedItem"
import { Realm } from "@davidcraig/wowdata/Realm"
import { Role } from "@davidcraig/wowdata/Role";
import { Race } from "@davidcraig/wowdata/Race";

// Canonical list of WoW professions
export type WowProfession =
    | "alchemy"
    | "blacksmithing"
    | "enchanting"
    | "engineering"
    | "inscription"
    | "jewelcrafting"
    | "leatherworking"
    | "tailoring"
    | "skinning"
    | "herbalism"
    | "mining"
    | "cooking"
    | "fishing";

// Expansion slugs keyed the same way other parts of the app refer to them
export type WowExpansionSlug =
   | "wow"
   | "tbc"
   | "wrath"
   | "cata"
   | "mop"
   | "wod"
   | "legion"
   | "bfa"
   | "sl"
   | "df"
   | "tww"
   | "midnight"
   | "last_titan";

// Per-expansion profession progress can be a simple skill number (backward compatible)
// or an object including the skill and an optional list of crafted items
export type ProfessionProgress = {
    skill: number;
    items?: CraftedItem[];
    cap?: number; // optional per-character cap override
};

// For a single profession, map expansion -> progress value
export type ProfessionProgressByExpansion = Partial<Record<WowExpansionSlug, number | ProfessionProgress>>;

// For a character, map profession -> per-expansion progress
export type CharacterProfessions = Partial<Record<WowProfession, ProfessionProgressByExpansion>>;

export type Character = {
    name: string;
    realm: Realm;
    race?: Race;
    wowclass: WoWClass;
    professions?: CharacterProfessions;
    role?: Role[];
};
