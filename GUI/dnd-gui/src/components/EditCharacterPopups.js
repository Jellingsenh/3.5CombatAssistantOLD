import React from 'react';
import { Add, SaveAs} from '@mui/icons-material';
import {Paper, Stack, Button, TextField, FormControlLabel, Checkbox, getFormGroupUtilityClass} from '@mui/material';

export function returnCharacterCreatePopup () {
    console.log('create character menu called')
    
    return (
        <Paper style={{maxHeight: 675, overflow: 'auto', 'backgroundColor':'white'}}>
            <p style={{fontSize: "12px", fontWeight: "bold"}}>Add a character (PCs use Dexterity score instead of initiative bonus, and NPCs have "(CR x)" at the end):</p>
            <Stack spacing={1} style={{border: '20px solid white', borderRadius: '5px'}}>
                <div style={{"display": "flex", "flexDirection": "row"}}>
                    <TextField color="secondary"
                        size="small"
                        focused
                        style={{width: '100%'}}
                        onChange={addCharName}
                        required
                        id="outlined-required"
                        label="Name"
                    />&nbsp;&nbsp;
                    <TextField color="secondary"
                        size="small"
                        focused
                        style={{width: '100%'}}
                        onChange={addCharRace}
                        required
                        id="outlined-required"
                        label="Race"
                    />&nbsp;&nbsp;
                    <TextField color="secondary"
                        size="small"
                        style={{width: '100%'}}
                        onChange={addCharStatus}
                        label="Appearance / Status"
                    />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <FormControlLabel size = "small" control={<Checkbox color="eighth" defaultChecked={false} onChange={addCharNPC}/>} label="NPC" />
                </div>
                <div style={{"display": "flex", "flexDirection": "row"}}>
                    <TextField color="secondary"
                        size="small"
                        focused
                        style={{width: '6%'}}
                        onChange={addCharSize}
                        required
                        id="outlined-required"
                        label="Size"
                    />&nbsp;&nbsp;
                    <TextField color="third"
                        size="small"
                        focused
                        style={{width: '8%'}}
                        onChange={addCharMaxHp}
                        required
                        id="outlined-required"
                        type="number"
                        label="Max Health"
                    />&nbsp;
                    <TextField color="third"
                        size="small"
                        onChange={addCharCurrHp}
                        style={{width: '12%'}}
                        type="number"
                        label="Current Health"
                    />&nbsp;&nbsp;
                    <TextField color="ninth"
                        size="small"
                        focused
                        style={{width: '9.5%'}}
                        onChange={addCharInit}
                        required
                        id="outlined-required"
                        type="number"
                        label="Initiative bonus"
                    />&nbsp;
                    <TextField color="ninth"
                        size="small"
                        focused
                        style={{width: '8%'}}
                        onChange={addCharSpeed}
                        required
                        id="outlined-required"
                        type="number"
                        label="Speed (feet)"
                    />&nbsp;&nbsp;
                    <TextField color="eighth"
                        size="small"
                        focused
                        style={{width: '6%'}}
                        onChange={addCharGrapple}
                        required
                        id="outlined-required"
                        type="number"
                        label="Grapple"
                    />&nbsp;&nbsp;
                    <TextField color="editblue"
                        size="small"
                        focused
                        style={{width: '7.5%'}}
                        InputLabelProps={{ style: { fontSize: 12 } }}
                        onChange={addCharFort}
                        required
                        id="outlined-required"
                        type="number"
                        label="Fortitude save"
                    />&nbsp;
                    <TextField color="editblue"
                        size="small"
                        focused
                        style={{width: '7.5%'}}
                        InputLabelProps={{ style: { fontSize: 14 } }}
                        onChange={addCharRef}
                        required
                        id="outlined-required"
                        type="number"
                        label="Reflex save"
                    />&nbsp;
                    <TextField color="editblue"
                        size="small"
                        focused
                        style={{width: '7.5%'}}
                        onChange={addCharWill}
                        required
                        id="outlined-required"
                        type="number"
                        label="Will save"
                    />&nbsp;&nbsp;
                    <TextField color="seventh"
                        size="small"
                        focused
                        style={{width: '7.5%'}}
                        InputLabelProps={{ style: { fontSize: 14 } }}
                        onChange={addCharAc}
                        required
                        id="outlined-required"
                        type="number"
                        label="Armor class"
                    />&nbsp;
                    <TextField color="seventh"
                        size="small"
                        focused
                        style={{width: '7.5%'}}
                        InputLabelProps={{ style: { fontSize: 14 } }}
                        onChange={addCharTouch}
                        required
                        id="outlined-required"
                        type="number"
                        label="Touch armor"
                    />&nbsp;
                    <TextField color="seventh"
                        size="small"
                        focused
                        style={{width: '7.5%'}}
                        InputLabelProps={{ style: { fontSize: 11 } }}
                        onChange={addCharFf}
                        required
                        id="outlined-required"
                        type="number"
                        label="Flat-footed armor"
                    />
                </div>
            
                <TextField fullWidth color="eighth"
                    size="small"
                    focused
                    onChange={addCharAttacks}
                    required
                    id="outlined-required"
                    label="Main Attacks / Spells / Abilities"
                />
                <TextField fullWidth color="dmblue"
                    size="small"
                    onChange={addCharResistances}
                    label="Resistances"
                />
                <TextField fullWidth color="lightteal"
                    size="small"
                    onChange={addCharReactions}
                    label="Reactions / Weaknesses"
                />
                <TextField fullWidth color="sandyellow"
                    size="small"
                    onChange={addCharMagic}
                    label="Usable Items"
                />
                <TextField fullWidth color="sixth"
                    size="small"
                    onChange={addCharSpells}
                    label="Other Attacks / Spells"
                />
                <TextField fullWidth color="sixth"
                    size="small"
                    onChange={addCharMoreSpells}
                    label="Spell-like Abilities / More Spells"
                />
                <TextField fullWidth color="sixth"
                    size="small"
                    onChange={addCharFeats}
                    label="Feats / Abilities"
                />
                <TextField fullWidth color="sixth"
                    size="small"
                    onChange={addCharOtherAbilities}
                    label="Other Abilities"
                />
                <TextField fullWidth color="sixth"
                    size="small"
                    onChange={addCharSkills}
                    label="Skills"
                />
                <TextField fullWidth color="sixth"
                    size="small"
                    onChange={addCharAbilityScores}
                    label="Ability Scores"
                />
                <TextField fullWidth color="sixth"
                    size="small"
                    onChange={addCharLoot}
                    label="Loot"
                />
                <TextField fullWidth color="sixth"
                    size="small"
                    onChange={addCharOther}
                    label="Other"
                />

                <Button size="small" color="deeppurp" style={{color:"white"}} onClick={createEnterButton} variant="contained" endIcon={<Add />}>
                    Create character! 
                </Button>
            </Stack>
        </Paper>
    );
}

export function returnCharacterEditPopup (currentCharacterFull) {
    var charName = currentCharacterFull.charName
    console.log('Loaded character ' + charName + ' for editing:', currentCharacterFull);

    prepopupateValues(currentCharacterFull)

    return (
        <Paper style={{maxHeight: 675, overflow: 'auto', 'backgroundColor':'white'}}>
            <p style={{fontSize: "12px", fontWeight: "bold"}}>Edit {charName} (PCs use Dexterity score instead of initiative bonus, and NPCs have "(CR x)" at the end):</p>
            <Stack spacing={1} style={{border: '20px solid white', borderRadius: '5px'}}>
                <div style={{"display": "flex", "flexDirection": "row"}}>
                    <TextField color="secondary"
                        size="small"
                        focused
                        style={{width: '100%'}}
                        id="outlined-required"
                        InputLabelProps={{ style: { fontSize: 14 } }}
                        label="Name (if changed, will create a new character)"
                        onChange={addCharName}
                        defaultValue={charName}
                    />&nbsp;&nbsp;
                    <TextField color="secondary"
                        size="small"
                        focused
                        style={{width: '100%'}}
                        onChange={addCharRace}
                        required
                        id="outlined-required"
                        label="Race"
                        defaultValue={currentCharacterFull.race}
                    />&nbsp;&nbsp;
                    <TextField color="secondary"
                        size="small"
                        focused
                        style={{width: '100%'}}
                        onChange={addCharStatus}
                        label="Appearance / Status"
                        defaultValue={currentCharacterFull.statusString}
                    />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <FormControlLabel size="small" control={<Checkbox color="eighth" defaultChecked={stringToBoolean(currentCharacterFull.npc)} onChange={addCharNPC}/>} label="NPC" />
                </div>
                <div style={{"display": "flex", "flexDirection": "row"}}>
                    <TextField color="secondary"
                        size="small"
                        focused
                        style={{width: '6%'}}
                        onChange={addCharSize}
                        required
                        id="outlined-required"
                        label="Size"
                        defaultValue={currentCharacterFull.size}
                    />&nbsp;&nbsp;
                    <TextField color="third"
                        size="small"
                        focused
                        style={{width: '8%'}}
                        onChange={addCharMaxHp}
                        required
                        id="outlined-required"
                        type="number"
                        label="Max Health"
                        defaultValue={currentCharacterFull.health}
                    />&nbsp;
                    <TextField color="third"
                        size="small"
                        focused
                        style={{width: '12%'}}
                        onChange={addCharCurrHp}
                        type="number"
                        label="Current Health"
                        defaultValue={currentCharacterFull.currentHealth}
                    />&nbsp;&nbsp;
                    <TextField color="ninth"
                        size="small"
                        focused
                        style={{width: '9.5%'}}
                        onChange={addCharInit}
                        required
                        id="outlined-required"
                        type="number"
                        label="Initiative bonus"
                        defaultValue={currentCharacterFull.initiativeBonus}
                    />&nbsp;
                    <TextField color="ninth"
                        size="small"
                        focused
                        style={{width: '8%'}}
                        onChange={addCharSpeed}
                        required
                        id="outlined-required"
                        type="number"
                        label="Speed (feet)"
                        defaultValue={currentCharacterFull.speed}
                    />&nbsp;&nbsp;
                    <TextField color="eighth"
                        size="small"
                        focused
                        style={{width: '6%'}}
                        onChange={addCharGrapple}
                        required
                        id="outlined-required"
                        type="number"
                        label="Grapple"
                        defaultValue={currentCharacterFull.grapple}
                    />&nbsp;&nbsp;
                    <TextField color="editblue"
                        size="small"
                        focused
                        style={{width: '8%'}}
                        InputLabelProps={{ style: { fontSize: 12 } }}
                        onChange={addCharFort}
                        required
                        id="outlined-required"
                        type="number"
                        defaultValue={currentCharacterFull.fortSave}
                        label="Fortitude save"
                    />&nbsp;
                    <TextField color="editblue"
                        size="small"
                        focused
                        style={{width: '8%'}}
                        InputLabelProps={{ style: { fontSize: 14 } }}
                        onChange={addCharRef}
                        required
                        id="outlined-required"
                        type="number"
                        label="Reflex save"
                        defaultValue={currentCharacterFull.refSave}
                    />&nbsp;
                    <TextField color="editblue"
                        size="small"
                        focused
                        style={{width: '8%'}}
                        onChange={addCharWill}
                        required
                        id="outlined-required"
                        type="number"
                        label="Will save"
                        defaultValue={currentCharacterFull.willSave}
                    />&nbsp;&nbsp;
                    <TextField color="seventh"
                        size="small"
                        focused
                        style={{width: '8%'}}
                        InputLabelProps={{ style: { fontSize: 14 } }}
                        onChange={addCharAc}
                        required
                        id="outlined-required"
                        type="number"
                        label="Armor class"
                        defaultValue={currentCharacterFull.armorClass}
                    />&nbsp;
                    <TextField
                        onChange={addCharTouch}
                        required 
                        color="seventh"
                        size="small"
                        focused
                        style={{width: '8%'}}
                        InputLabelProps={{ style: { fontSize: 14 } }}
                        id="outlined-required"
                        type="number"
                        label="Touch armor"
                        defaultValue={currentCharacterFull.touchArmor}
                    />&nbsp;
                    <TextField color="seventh"
                        size="small"
                        focused
                        style={{width: '8%'}}
                        InputLabelProps={{ style: { fontSize: 11 } }}
                        onChange={addCharFf}
                        required
                        id="outlined-required"
                        type="number"
                        label="Flat-footed armor"
                        defaultValue={currentCharacterFull.flatFooted}
                    />
                </div>
            
                <TextField fullWidth color="eighth"
                    size="small"
                    focused
                    onChange={addCharAttacks}
                    required
                    id="outlined-required"
                    label="Main Attacks / Spells / Abilities"
                    defaultValue={currentCharacterFull.attacksString}
                />
                <TextField fullWidth color="dmblue"
                    size="small"
                    focused
                    onChange={addCharResistances}
                    label="Resistances"
                    defaultValue={currentCharacterFull.resistancesString}
                />
                <TextField fullWidth color="lightteal"
                    size="small"
                    focused
                    onChange={addCharReactions}
                    label="Reactions / Weaknesses"
                    defaultValue={currentCharacterFull.reactionsString}
                />
                <TextField fullWidth color="sandyellow"
                    size="small"
                    focused
                    onChange={addCharMagic}
                    label="Usable Items"
                    defaultValue={currentCharacterFull.magicItemsString}
                />
                <TextField fullWidth color="sixth"
                    size="small"
                    focused
                    onChange={addCharSpells}
                    label="Other Attacks / Spells"
                    defaultValue={currentCharacterFull.spellsString}
                />
                <TextField fullWidth color="sixth"
                    size="small"
                    focused
                    onChange={addCharMoreSpells}
                    label="Spell-like Abilities / More Spells"
                    defaultValue={currentCharacterFull.moreSpellsString}
                />
                <TextField fullWidth color="sixth"
                    size="small"
                    focused
                    onChange={addCharFeats}
                    label="Feats / Abilities"
                    defaultValue={currentCharacterFull.featsString}
                />
                <TextField fullWidth color="sixth"
                    size="small"
                    focused
                    onChange={addCharOtherAbilities}
                    label="Other Abilities"
                    defaultValue={currentCharacterFull.otherAbilitiesString}
                />
                <TextField fullWidth color="sixth"
                    size="small"
                    focused
                    onChange={addCharSkills}
                    label="Skills"
                    defaultValue={currentCharacterFull.skillsString}
                />
                <TextField fullWidth color="sixth"
                    size="small"
                    focused
                    onChange={addCharAbilityScores}
                    label="Ability Scores"
                    defaultValue={currentCharacterFull.statsString}
                />
                <TextField fullWidth color="sixth"
                    size="small"
                    focused
                    onChange={addCharLoot}
                    label="Loot"
                    defaultValue={currentCharacterFull.lootString}
                />
                <TextField fullWidth color="sixth"
                    size="small"
                    focused
                    onChange={addCharOther}
                    label="Other"
                    defaultValue={currentCharacterFull.otherString}
                />

                <Button size = "small" color="deeppurp" style={{color:"white"}} onClick={editEnterButton} variant="contained" endIcon={<SaveAs />}>
                    Submit changes
                </Button>
            </Stack>
        </Paper>
    );
}

export function returnCharacterViewPopup(currentCharacterFull) {
    var charName = currentCharacterFull.charName
    console.log('Loaded character ' + charName + ' for viewing:', currentCharacterFull);

    prepopupateValues(currentCharacterFull)

    return (
        <Paper style={{maxHeight: 660, overflow: 'auto', 'backgroundColor':'white'}}>
            <p style={{fontSize: "12px", fontWeight: "bold"}}>{charName}:</p>
            <Stack spacing={1} style={{border: '20px solid white', borderRadius: '5px'}}>
                <div style={{"display": "flex", "flexDirection": "row"}}>
                    <TextField color="secondary"
                        size="small"
                        focused
                        style={{width: '100%'}}
                        id="outlined-required"
                        label="Name"
                        InputProps={{
                            readOnly: true,
                        }}
                        defaultValue={charName}
                    />&nbsp;&nbsp;
                    <TextField color="secondary"
                        size="small"
                        focused
                        style={{width: '100%'}}
                        InputProps={{
                            readOnly: true,
                        }}
                        id="outlined-required"
                        label="Race"
                        defaultValue={currentCharacterFull.race}
                    />&nbsp;&nbsp;
                    <TextField color="secondary"
                        size="small"
                        focused
                        style={{width: '100%'}}
                        InputProps={{
                            readOnly: true,
                        }}
                        label="Appearance / Status"
                        defaultValue={currentCharacterFull.statusString}
                    />&nbsp;&nbsp;
                    <TextField color="eighth"
                        size="small"
                        focused
                        style={{width: '20%'}}
                        InputProps={{
                            readOnly: true,
                        }}
                        id="outlined-required"
                        label="NPC"
                        defaultValue={currentCharacterFull.npc}
                    />
                </div>
                <div style={{"display": "flex", "flexDirection": "row"}}>
                    <TextField color="secondary"
                        size="small"
                        focused
                        style={{width: '6'}}
                        InputProps={{
                            readOnly: true,
                        }}
                        id="outlined-required"
                        label="Size"
                        defaultValue={currentCharacterFull.size}
                    />&nbsp;&nbsp;
                    <TextField color="third"
                        size="small"
                        focused
                        InputProps={{
                            readOnly: true,
                        }}
                        id="outlined-required"
                        type="number"
                        label="Max Health"
                        defaultValue={currentCharacterFull.health}
                    />&nbsp;
                    <TextField color="third"
                        size="small"
                        focused
                        InputProps={{
                            readOnly: true,
                        }}
                        type="number"
                        label="Current Health"
                        defaultValue={currentCharacterFull.currentHealth}
                    />&nbsp;&nbsp;
                    <TextField color="ninth"
                        size="small"
                        focused
                        InputProps={{
                            readOnly: true,
                        }}
                        id="outlined-required"
                        type="number"
                        InputLabelProps={{ style: { fontSize: 14 } }}
                        label="Initiative bonus"
                        defaultValue={currentCharacterFull.initiativeBonus}
                    />&nbsp;
                    <TextField color="ninth"
                        size="small"
                        focused
                        InputProps={{
                            readOnly: true,
                        }}
                        id="outlined-required"
                        type="number"
                        label="Speed"
                        defaultValue={currentCharacterFull.speed}
                    />&nbsp;&nbsp;
                    <TextField color="eighth"
                        size="small"
                        focused
                        InputProps={{
                            readOnly: true,
                        }}
                        id="outlined-required"
                        type="number"
                        label="Grapple"
                        defaultValue={currentCharacterFull.grapple}
                    />&nbsp;&nbsp;
                    <TextField color="editblue"
                        size="small"
                        focused
                        InputProps={{
                            readOnly: true,
                        }}
                        id="outlined-required"
                        type="number"
                        defaultValue={currentCharacterFull.fortSave}
                        label="Fortitude save"
                    />&nbsp;
                    <TextField color="editblue"
                        size="small"
                        focused
                        InputProps={{
                            readOnly: true,
                        }}
                        id="outlined-required"
                        type="number"
                        label="Reflex save"
                        defaultValue={currentCharacterFull.refSave}
                    />&nbsp;
                    <TextField color="editblue"
                        size="small"
                        focused
                        InputProps={{
                            readOnly: true,
                        }}
                        id="outlined-required"
                        type="number"
                        label="Will save"
                        defaultValue={currentCharacterFull.willSave}
                    />&nbsp;&nbsp;
                    <TextField color="seventh"
                        size="small"
                        focused
                        InputProps={{
                            readOnly: true,
                        }}
                        id="outlined-required"
                        type="number"
                        label="Armor class"
                        defaultValue={currentCharacterFull.armorClass}
                    />&nbsp;
                    <TextField
                        InputProps={{
                            readOnly: true,
                        }}
                        color="seventh"
                        size="small"
                        focused
                        id="outlined-required"
                        type="number"
                        label="Touch armor"
                        defaultValue={currentCharacterFull.touchArmor}
                    />&nbsp;
                    <TextField color="seventh"
                        size="small"
                        focused
                        InputProps={{
                            readOnly: true,
                        }}
                        id="outlined-required"
                        type="number"
                        InputLabelProps={{ style: { fontSize: 12 } }}
                        label="Flat-footed armor"
                        defaultValue={currentCharacterFull.flatFooted}
                    />
                </div>
            
                <TextField fullWidth color="eighth"
                    size="small"
                    focused
                    InputProps={{
                        readOnly: true,
                    }}
                    id="outlined-required"
                    label="Main Attacks / Spells / Abilities"
                    defaultValue={currentCharacterFull.attacksString}
                />
                <TextField fullWidth color="dmblue"
                    size="small"
                    focused
                    InputProps={{
                        readOnly: true,
                    }}
                    label="Resistances"
                    defaultValue={currentCharacterFull.resistancesString}
                />
                <TextField fullWidth color="lightteal"
                    size="small"
                    focused
                    InputProps={{
                        readOnly: true,
                    }}
                    label="Reactions / Weaknesses"
                    defaultValue={currentCharacterFull.reactionsString}
                />
                <TextField fullWidth color="sandyellow"
                    size="small"
                    focused
                    InputProps={{
                        readOnly: true,
                    }}
                    label="Usable Items"
                    defaultValue={currentCharacterFull.magicItemsString}
                />
                <TextField fullWidth color="sixth"
                    size="small"
                    focused
                    InputProps={{
                        readOnly: true,
                    }}
                    label="Other Attacks / Spells"
                    defaultValue={currentCharacterFull.spellsString}
                />
                <TextField fullWidth color="sixth"
                    size="small"
                    focused
                    InputProps={{
                        readOnly: true,
                    }}
                    label="Spell-like Abilities / More Spells"
                    defaultValue={currentCharacterFull.moreSpellsString}
                />
                <TextField fullWidth color="sixth"
                    size="small"
                    focused
                    InputProps={{
                        readOnly: true,
                    }}
                    label="Feats / Abilities"
                    defaultValue={currentCharacterFull.featsString}
                />
                <TextField fullWidth color="sixth"
                    size="small"
                    focused
                    InputProps={{
                        readOnly: true,
                    }}
                    label="Other Abilities"
                    defaultValue={currentCharacterFull.otherAbilitiesString}
                />
                <TextField fullWidth color="sixth"
                    size="small"
                    focused
                    InputProps={{
                        readOnly: true,
                    }}
                    label="Skills"
                    defaultValue={currentCharacterFull.skillsString}
                />
                <TextField fullWidth color="sixth"
                    size="small"
                    focused
                    InputProps={{
                        readOnly: true,
                    }}
                    label="Ability Scores"
                    defaultValue={currentCharacterFull.statsString}
                />
                <TextField fullWidth color="sixth"
                    size="small"
                    focused
                    InputProps={{
                        readOnly: true,
                    }}
                    label="Loot"
                    defaultValue={currentCharacterFull.lootString}
                />
                <TextField fullWidth color="sixth"
                    size="small"
                    focused
                    InputProps={{
                        readOnly: true,
                    }}
                    label="Other"
                    defaultValue={currentCharacterFull.otherString}
                />
            </Stack>
        </Paper>
    );
}

// builder function & api calls:

var tempCharName
var tempCharRace
var tempCharSize
var tempCharNPC = false
var tempCharMaxHp
var tempCharCurrentHp
var tempCharInit
var tempCharAc
var tempCharTouch
var tempCharFf
var tempCharFort
var tempCharRef
var tempCharWill
var tempCharGrapple
var tempCharSpeed
var tempCharAttacks
var tempCharSpells
var tempCharSkills
var tempCharFeats
var tempCharStatus
var tempCharMagicItems
var tempCharLoot
var tempCharOther
var tempCharResistances
var tempCharReactions
var tempCharMoreSpells
var tempCharOtherAbilities
var tempCharAbilityScores

function prepopupateValues(currentCharacterFull) {
    tempCharName = currentCharacterFull.charName
    tempCharRace = currentCharacterFull.race
    tempCharSize = currentCharacterFull.size
    tempCharNPC = stringToBoolean(currentCharacterFull.npc)
    tempCharMaxHp = currentCharacterFull.health.toString()
    tempCharCurrentHp = currentCharacterFull.currentHealth.toString()
    tempCharInit = currentCharacterFull.initiativeBonus.toString()
    tempCharAc = currentCharacterFull.armorClass.toString()
    tempCharTouch = currentCharacterFull.touchArmor.toString()
    tempCharFf = currentCharacterFull.flatFooted.toString()
    tempCharFort = currentCharacterFull.fortSave.toString()
    tempCharRef = currentCharacterFull.refSave.toString()
    tempCharWill = currentCharacterFull.willSave.toString()
    tempCharGrapple = currentCharacterFull.grapple.toString()
    tempCharSpeed = currentCharacterFull.speed.toString()
    tempCharAttacks = currentCharacterFull.attacksString
    tempCharSpells = currentCharacterFull.spellsString
    tempCharSkills = currentCharacterFull.skillsString
    tempCharFeats = currentCharacterFull.featsString
    tempCharStatus = currentCharacterFull.statusString
    tempCharMagicItems = currentCharacterFull.magicItemsString
    tempCharLoot = currentCharacterFull.lootString
    tempCharResistances = currentCharacterFull.resistancesString
    tempCharReactions = currentCharacterFull.reactionsString
    tempCharMoreSpells = currentCharacterFull.moreSpellsString
    tempCharOtherAbilities = currentCharacterFull.otherAbilitiesString
    tempCharAbilityScores = currentCharacterFull.statsString
    tempCharOther = currentCharacterFull.otherString
}

function stringToBoolean(string) {
    switch(string){
        case "true": case "yes": case "1": return true;
        case "false": case "no": case "0": case null: return false;
        default: return Boolean(string);
    }
}

function addCharName(e) {
    tempCharName = e.target.value
    console.log('Name: ' + tempCharName)
}

function addCharRace(e) {
    tempCharRace = e.target.value
}

function addCharSize(e) {
    tempCharSize = e.target.value
}

function addCharStatus(e) {
    tempCharStatus = e.target.value
}

function addCharNPC(e) {
    tempCharNPC = e.target.checked
    // console.log("NPC? " + tempCharNPC)
}

function addCharInit(e) {
    tempCharInit = e.target.value
}

function addCharSpeed(e) {
    tempCharSpeed = e.target.value
}

function addCharMaxHp(e) {
    tempCharMaxHp = e.target.value
}

function addCharCurrHp(e) {
    tempCharCurrentHp = e.target.value
}

function addCharFort(e) {
    tempCharFort = e.target.value
}

function addCharRef(e) {
    tempCharRef = e.target.value
}

function addCharWill(e) {
    tempCharWill = e.target.value
}

function addCharGrapple(e) {
    tempCharGrapple = e.target.value
}

function addCharAc(e) {
    tempCharAc = e.target.value
}

function addCharTouch(e) {
    tempCharTouch = e.target.value
}

function addCharFf(e) {
    tempCharFf = e.target.value
}

function addCharAttacks(e) {
    tempCharAttacks = e.target.value
}

function addCharSpells(e) {
    tempCharSpells = e.target.value
}

function addCharFeats(e) {
    tempCharFeats = e.target.value
}

function addCharSkills(e) {
    tempCharSkills = e.target.value
}

function addCharMagic(e) {
    tempCharMagicItems = e.target.value
}

function addCharLoot(e) {
    tempCharLoot = e.target.value
}

function addCharResistances(e) {
    tempCharResistances = e.target.value
}

function addCharReactions(e) {
    tempCharReactions = e.target.value
}

function addCharMoreSpells(e) {
    tempCharMoreSpells = e.target.value
}

function addCharOtherAbilities(e) {
    tempCharOtherAbilities = e.target.value
}

function addCharAbilityScores(e) {
    tempCharAbilityScores = e.target.value
}

function addCharOther(e) {
    tempCharOther = e.target.value
}

function createEnterButton() {
    //create the character
    
    // null checks
    if (tempCharStatus == null) {
        tempCharStatus = "Normal"
        console.log('Defaulting status to Normal')
    }

    if (tempCharCurrentHp == null) {tempCharCurrentHp = ""}
    if (tempCharAttacks == null) {tempCharAttacks = ""}
    if (tempCharSpells == null) {tempCharSpells = ""}
    if (tempCharSkills == null) {tempCharSkills = ""}
    if (tempCharMagicItems == null) {tempCharMagicItems = "None"}
    if (tempCharLoot == null) {tempCharLoot = ""}
    if (tempCharFeats == null) {tempCharFeats = ""}
    if (tempCharOtherAbilities == null) {tempCharOtherAbilities = ""}
    if (tempCharResistances == null) {tempCharResistances = "None"}
    if (tempCharReactions == null) {tempCharReactions = "None"}
    if (tempCharMoreSpells == null) {tempCharMoreSpells = ""}
    if (tempCharAbilityScores == null) {tempCharAbilityScores = ""}
    if (tempCharOther == null) {tempCharOther = ""}

    // null check on required inputs
    if (tempCharName == null || tempCharRace == null || tempCharSize == null || tempCharMaxHp == null || tempCharInit == null || tempCharAc == null || tempCharTouch == null 
        || tempCharFf == null || tempCharFort == null || tempCharRef == null || tempCharWill == null || tempCharGrapple == null || tempCharSpeed == null) {
        alert('error creating character, some required values are blank')
    } else {
        apiAddCharacter(tempCharName, tempCharRace, tempCharSize, tempCharMaxHp, tempCharCurrentHp, tempCharInit, tempCharAc, tempCharTouch, tempCharFf, tempCharFort, tempCharRef, tempCharWill, tempCharGrapple, 
            tempCharSpeed, tempCharAttacks, tempCharSpells, tempCharSkills, tempCharMagicItems, tempCharLoot, tempCharFeats, tempCharStatus, tempCharOther, tempCharNPC.toString(), tempCharOtherAbilities, 
            tempCharResistances, tempCharReactions, tempCharMoreSpells, tempCharAbilityScores)
    }
}

function editEnterButton() {
    //edit the character

    // null checks
    if (tempCharStatus == null) {
        tempCharStatus = "Normal"
        console.log('Defaulting status to Normal')
    }

    if (tempCharCurrentHp == null) {tempCharCurrentHp = ""}
    if (tempCharAttacks == null) {tempCharAttacks = ""}
    if (tempCharSpells == null) {tempCharSpells = ""}
    if (tempCharSkills == null) {tempCharSkills = ""}
    if (tempCharMagicItems == null) {tempCharMagicItems = "None"}
    if (tempCharLoot == null) {tempCharLoot = ""}
    if (tempCharFeats == null) {tempCharFeats = ""}
    if (tempCharOtherAbilities == null) {tempCharOtherAbilities = ""}
    if (tempCharResistances == null) {tempCharResistances = "None"}
    if (tempCharReactions == null) {tempCharReactions = "None"}
    if (tempCharMoreSpells == null) {tempCharMoreSpells = ""}
    if (tempCharAbilityScores == null) {tempCharAbilityScores = ""}
    if (tempCharOther == null) {tempCharOther = ""}

    // null check on required inputs
    if (tempCharName == null || tempCharRace == null || tempCharSize == null || tempCharMaxHp == null || tempCharInit == null || tempCharAc == null || tempCharTouch == null 
        || tempCharFf == null || tempCharFort == null || tempCharRef == null || tempCharWill == null || tempCharGrapple == null || tempCharSpeed == null) {
        alert('error editing character, some required values are blank')
    } else {
        apiEditCharacter(tempCharName, tempCharRace, tempCharSize, tempCharMaxHp, tempCharCurrentHp, tempCharInit, tempCharAc, tempCharTouch, tempCharFf, tempCharFort, tempCharRef, tempCharWill, tempCharGrapple, 
            tempCharSpeed, tempCharAttacks, tempCharSpells, tempCharSkills, tempCharMagicItems, tempCharLoot, tempCharFeats, tempCharStatus, tempCharOther, tempCharNPC.toString(), tempCharOtherAbilities, 
            tempCharResistances, tempCharReactions, tempCharMoreSpells, tempCharAbilityScores)
    }
}

// API connection functions below:
  
async function apiAddCharacter(charName, race, size, maxHealth, currentHealth, initiativeBonus, armor, touch, flatFooted, fort, ref, will, grapple, 
    speed, attacks, spells, skills, magic, loot, feats, status, other, isNPC, otherAbilities, resistances, reactions, moreSpells, abilityScores) {

    const res = await fetch(window.apiURL +'/playermenu/addcharacter', {
        method: 'POST',
        body: JSON.stringify({
            "characterName": charName,
            "maxHealth": maxHealth,
            "currentHealth": currentHealth,
            "initiative": initiativeBonus,
            "armorClass": armor,
            "touch": touch,
            "flatFooted": flatFooted,
            "fortSave": fort,
            "refSave": ref,
            "willSave": will,
            "grapple": grapple,
            "speed": speed,
            "attacks": attacks,
            "skills": skills,
            "spells": spells,
            "magicItems": magic,
            "loot": loot,
            "feats": feats,
            "status": status,
            "race": race,
            "size": size,
            "otherAbilities": otherAbilities,
            "stats": abilityScores,
            "resistances": resistances,
            "reactions": reactions,
            "moreSpells": moreSpells,
            "other": other,
            "isNPC": isNPC,
        })
    })
    .then((response) => {
        if(response.status === 400){
            console.log('Character', charName, 'already exists');
        } else if (response.status === 200) {
            console.log('Adding character', charName);
            // refresh page
            window.location.reload(false);
        }
    })
    .catch(err => {
        console.log(err);
    });
}

async function apiEditCharacter(charName, race, size, maxHealth, currentHealth, initiativeBonus, armor, touch, flatFooted, fort, ref, will, grapple, 
    speed, attacks, spells, skills, magic, loot, feats, status, other, isNPC, otherAbilities, resistances, reactions, moreSpells, abilityScores) {

        const res = await fetch(window.apiURL + '/playermenu/editcharacter', {
        method: 'POST',
        body: JSON.stringify({
            "characterName": charName,
            "maxHealth": maxHealth,
            "currentHealth": currentHealth,
            "initiative": initiativeBonus,
            "armorClass": armor,
            "touch": touch,
            "flatFooted": flatFooted,
            "fortSave": fort,
            "refSave": ref,
            "willSave": will,
            "grapple": grapple,
            "speed": speed,
            "attacks": attacks,
            "skills": skills,
            "spells": spells,
            "magicItems": magic,
            "loot": loot,
            "feats": feats,
            "status": status,
            "race": race,
            "size": size,
            "otherAbilities": otherAbilities,
            "stats": abilityScores,
            "resistances": resistances,
            "reactions": reactions,
            "moreSpells": moreSpells,
            "other": other,
            "isNPC": isNPC,
        })
    })
    .then((response) => {
        if(response.status === 400){
            console.log('Character', charName, 'does not exist');
        } else if (response.status === 200) {
            console.log('Edited character', charName);
            // refresh page
            window.location.reload(false);
        }
    })
    .catch(err => {
        console.log(err);
    });
}