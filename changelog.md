# 0.0.1 - 0.0.3

Initial versions

## Added
- `types/WoWClass.d.ts`
- `data/enum/Races.ts`
- `data/enum/Realms.ts`
- `data/Roles.ts` (const)

---

# 0.0.4 (unpublished)

## Added

- `types/Rarity.ts` (enum)
- `types/Role.ts`

## Changed

 - Update `WoWClass` to use `types/Role.ts`

---

# 0.0.5

## Added

 - `types/Material.d.ts`
 - `types/CraftedItem.d.ts`

## Changed

 - Fix: fixed uses of pluralised cases for enums, now using single case.
 - Fix: All types now have .d.ts extension.

---

# 0.0.6

## Added

 - Add all the character classes importable as either `@davidcraig/wowdata/classes` or each individual class `@davidcraig/wowdata/classes/death-knight`

---

# 0.0.7

## Fixes

 - Fix typo in monk.ts link to WoWClass

---

# 0.0.8

## Changes

 - Include tsconfig.json for DX and update imports to use qualified paths.