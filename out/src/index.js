
//Common logic
import EventEmitter from "events";

//Common
import autoUpdater from "./ext/autoupdate.js";
import config from "./src/config.json";

//Mod
import mod from "./src/mod.js";

//Common logic
var game=new EventEmitter();

//Base hooks
global._newLevel=()=>{
    game.emit("levelLoad");
};
global._procCmd=cmd=>{
    game.emit("commandExecuted",cmd);    
};

//Processing logic

            game.on("ModPE.dumpVtable",(par1String, par2int)=>{
                ModPE.dumpVtable(par1String, par2int);
            })
            game.on("ModPE.getBytesFromTexturePack",(par1String)=>{
                ModPE.getBytesFromTexturePack(par1String);
            })
            game.on("ModPE.getMinecraftVersion",()=>{
                ModPE.getMinecraftVersion();
            })
            game.on("ModPE.langEdit",(par1String, par2String)=>{
                ModPE.langEdit(par1String, par2String);
            })
            game.on("ModPE.leaveGame",()=>{
                ModPE.leaveGame();
            })
            game.on("ModPE.log",(par1String)=>{
                ModPE.log(par1String);
            })
            game.on("ModPE.openInputStreamFromTexturePack",(par1String)=>{
                ModPE.openInputStreamFromTexturePack(par1String);
            })
            game.on("ModPE.overrideTexture",(par1String, par2String)=>{
                ModPE.overrideTexture(par1String, par2String);
            })
            game.on("ModPE.readData",(par1String)=>{
                ModPE.readData(par1String);
            })
            game.on("ModPE.removeData",(par1String)=>{
                ModPE.removeData(par1String);
            })
            game.on("ModPE.resetFov",()=>{
                ModPE.resetFov();
            })
            game.on("ModPE.resetImages",()=>{
                ModPE.resetImages();
            })
            game.on("ModPE.saveData",(par1String, par2String)=>{
                ModPE.saveData(par1String, par2String);
            })
            game.on("ModPE.selectLevel",(par1String)=>{
                ModPE.selectLevel(par1String);
            })
            game.on("ModPE.setCamera",(par1Object)=>{
                ModPE.setCamera(par1Object);
            })
            game.on("ModPE.setFoodItem",(par1int, par2String, par3int, par4int, par5String, par6int)=>{
                ModPE.setFoodItem(par1int, par2String, par3int, par4int, par5String, par6int);
            })
            game.on("ModPE.setFov",(par1double)=>{
                ModPE.setFov(par1double);
            })
            game.on("ModPE.setGameSpeed",(par1double)=>{
                ModPE.setGameSpeed(par1double);
            })
            game.on("ModPE.setGuiBlocks",(par1String)=>{
                ModPE.setGuiBlocks(par1String);
            })
            game.on("ModPE.setItem",(par1int, par2String, par3int, par4String, par5int)=>{
                ModPE.setItem(par1int, par2String, par3int, par4String, par5int);
            })
            game.on("ModPE.setItems",(par1String)=>{
                ModPE.setItems(par1String);
            })
            game.on("ModPE.setTerrain",(par1String)=>{
                ModPE.setTerrain(par1String);
            })
            game.on("ModPE.showTipMessage",(par1String)=>{
                ModPE.showTipMessage(par1String);
            })
            game.on("ModPE.takeScreenshot",(par1String)=>{
                ModPE.takeScreenshot(par1String);
            })
            game.on("Level.addParticle",(par1int, par2double, par3double, par4double, par5double, par6double, par7double, par8int)=>{
                Level.addParticle(par1int, par2double, par3double, par4double, par5double, par6double, par7double, par8int);
            })
            game.on("Level.biomeIdToName",(par1int)=>{
                Level.biomeIdToName(par1int);
            })
            game.on("Level.canSeeSky",(par1int, par2int, par3int)=>{
                Level.canSeeSky(par1int, par2int, par3int);
            })
            game.on("Level.destroyBlock",(par1int, par2int, par3int, par4boolean)=>{
                Level.destroyBlock(par1int, par2int, par3int, par4boolean);
            })
            game.on("Level.dropItem",(par1double, par2double, par3double, par4double, par5int, par6int, par7int)=>{
                Level.dropItem(par1double, par2double, par3double, par4double, par5int, par6int, par7int);
            })
            game.on("Level.explode",(par1double, par2double, par3double, par4double, par5boolean)=>{
                Level.explode(par1double, par2double, par3double, par4double, par5boolean);
            })
            game.on("Level.getAddress",()=>{
                Level.getAddress();
            })
            game.on("Level.getBiome",(par1int, par2int)=>{
                Level.getBiome(par1int, par2int);
            })
            game.on("Level.getBiomeName",(par1int, par2int)=>{
                Level.getBiomeName(par1int, par2int);
            })
            game.on("Level.getBrightness",(par1int, par2int, par3int)=>{
                Level.getBrightness(par1int, par2int, par3int);
            })
            game.on("Level.getChestSlot",(par1int, par2int, par3int, par4int)=>{
                Level.getChestSlot(par1int, par2int, par3int, par4int);
            })
            game.on("Level.getChestSlotCount",(par1int, par2int, par3int, par4int)=>{
                Level.getChestSlotCount(par1int, par2int, par3int, par4int);
            })
            game.on("Level.getChestSlotData",(par1int, par2int, par3int, par4int)=>{
                Level.getChestSlotData(par1int, par2int, par3int, par4int);
            })
            game.on("Level.getData",(par1int, par2int, par3int)=>{
                Level.getData(par1int, par2int, par3int);
            })
            game.on("Level.getFurnaceSlot",(par1int, par2int, par3int, par4int)=>{
                Level.getFurnaceSlot(par1int, par2int, par3int, par4int);
            })
            game.on("Level.getFurnaceSlotCount",(par1int, par2int, par3int, par4int)=>{
                Level.getFurnaceSlotCount(par1int, par2int, par3int, par4int);
            })
            game.on("Level.getFurnaceSlotData",(par1int, par2int, par3int, par4int)=>{
                Level.getFurnaceSlotData(par1int, par2int, par3int, par4int);
            })
            game.on("Level.getGameMode",()=>{
                Level.getGameMode();
            })
            game.on("Level.getGrassColor",(par1int, par2int)=>{
                Level.getGrassColor(par1int, par2int);
            })
            game.on("Level.getLightningLevel",()=>{
                Level.getLightningLevel();
            })
            game.on("Level.getRainLevel",()=>{
                Level.getRainLevel();
            })
            game.on("Level.getSignText",(par1int, par2int, par3int, par4int)=>{
                Level.getSignText(par1int, par2int, par3int, par4int);
            })
            game.on("Level.getSpawnerEntityType",(par1int, par2int, par3int)=>{
                Level.getSpawnerEntityType(par1int, par2int, par3int);
            })
            game.on("Level.getTile",(par1int, par2int, par3int)=>{
                Level.getTile(par1int, par2int, par3int);
            })
            game.on("Level.getTime",()=>{
                Level.getTime();
            })
            game.on("Level.getWorldDir",()=>{
                Level.getWorldDir();
            })
            game.on("Level.getWorldName",()=>{
                Level.getWorldName();
            })
            game.on("Level.playSound",(par1double, par2double, par3double, par4String, par5double, par6double)=>{
                Level.playSound(par1double, par2double, par3double, par4String, par5double, par6double);
            })
            game.on("Level.playSoundEnt",(par1Object, par2String, par3double, par4double)=>{
                Level.playSoundEnt(par1Object, par2String, par3double, par4double);
            })
            game.on("Level.setChestSlot",(par1int, par2int, par3int, par4int, par5int, par6int, par7int)=>{
                Level.setChestSlot(par1int, par2int, par3int, par4int, par5int, par6int, par7int);
            })
            game.on("Level.setFurnaceSlot",(par1int, par2int, par3int, par4int, par5int, par6int, par7int)=>{
                Level.setFurnaceSlot(par1int, par2int, par3int, par4int, par5int, par6int, par7int);
            })
            game.on("Level.setGameMode",(par1int)=>{
                Level.setGameMode(par1int);
            })
            game.on("Level.setGrassColor",(par1int, par2int, par3int)=>{
                Level.setGrassColor(par1int, par2int, par3int);
            })
            game.on("Level.setLightningLevel",(par1double)=>{
                Level.setLightningLevel(par1double);
            })
            game.on("Level.setNightMode",(par1boolean)=>{
                Level.setNightMode(par1boolean);
            })
            game.on("Level.setRainLevel",(par1double)=>{
                Level.setRainLevel(par1double);
            })
            game.on("Level.setSignText",(par1int, par2int, par3int, par4int, par5String)=>{
                Level.setSignText(par1int, par2int, par3int, par4int, par5String);
            })
            game.on("Level.setSpawn",(par1int, par2int, par3int)=>{
                Level.setSpawn(par1int, par2int, par3int);
            })
            game.on("Level.setSpawnerEntityType",(par1int, par2int, par3int, par4int)=>{
                Level.setSpawnerEntityType(par1int, par2int, par3int, par4int);
            })
            game.on("Level.setTile",(par1int, par2int, par3int, par4int, par5int)=>{
                Level.setTile(par1int, par2int, par3int, par4int, par5int);
            })
            game.on("Level.setTime",(par1int)=>{
                Level.setTime(par1int);
            })
            game.on("Level.spawnChicken",(par1double, par2double, par3double, par4String)=>{
                Level.spawnChicken(par1double, par2double, par3double, par4String);
            })
            game.on("Level.spawnCow",(par1double, par2double, par3double, par4String)=>{
                Level.spawnCow(par1double, par2double, par3double, par4String);
            })
            game.on("Level.spawnMob",(par1double, par2double, par3double, par4int, par5String)=>{
                Level.spawnMob(par1double, par2double, par3double, par4int, par5String);
            })
            game.on("Player.addExp",(par1int)=>{
                Player.addExp(par1int);
            })
            game.on("Player.addItemCreativeInv",(par1int, par2int, par3int)=>{
                Player.addItemCreativeInv(par1int, par2int, par3int);
            })
            game.on("Player.addItemInventory",(par1int, par2int, par3int)=>{
                Player.addItemInventory(par1int, par2int, par3int);
            })
            game.on("Player.canFly",()=>{
                Player.canFly();
            })
            game.on("Player.clearInventorySlot",(par1int)=>{
                Player.clearInventorySlot(par1int);
            })
            game.on("Player.getArmorSlot",(par1int)=>{
                Player.getArmorSlot(par1int);
            })
            game.on("Player.getArmorSlotDamage",(par1int)=>{
                Player.getArmorSlotDamage(par1int);
            })
            game.on("Player.getCarriedItem",()=>{
                Player.getCarriedItem();
            })
            game.on("Player.getCarriedItemCount",()=>{
                Player.getCarriedItemCount();
            })
            game.on("Player.getCarriedItemData",()=>{
                Player.getCarriedItemData();
            })
            game.on("Player.getDimension",()=>{
                Player.getDimension();
            })
            game.on("Player.getEntity",()=>{
                Player.getEntity();
            })
            game.on("Player.getExhaustion",()=>{
                Player.getExhaustion();
            })
            game.on("Player.getExp",()=>{
                Player.getExp();
            })
            game.on("Player.getHunger",()=>{
                Player.getHunger();
            })
            game.on("Player.getInventorySlot",(par1int)=>{
                Player.getInventorySlot(par1int);
            })
            game.on("Player.getInventorySlotCount",(par1int)=>{
                Player.getInventorySlotCount(par1int);
            })
            game.on("Player.getInventorySlotData",(par1int)=>{
                Player.getInventorySlotData(par1int);
            })
            game.on("Player.getLevel",()=>{
                Player.getLevel();
            })
            game.on("Player.getName",(par1Object)=>{
                Player.getName(par1Object);
            })
            game.on("Player.getPointedBlockData",()=>{
                Player.getPointedBlockData();
            })
            game.on("Player.getPointedBlockId",()=>{
                Player.getPointedBlockId();
            })
            game.on("Player.getPointedBlockSide",()=>{
                Player.getPointedBlockSide();
            })
            game.on("Player.getPointedBlockX",()=>{
                Player.getPointedBlockX();
            })
            game.on("Player.getPointedBlockY",()=>{
                Player.getPointedBlockY();
            })
            game.on("Player.getPointedBlockZ",()=>{
                Player.getPointedBlockZ();
            })
            game.on("Player.getPointedEntity",()=>{
                Player.getPointedEntity();
            })
            game.on("Player.getPointedVecX",()=>{
                Player.getPointedVecX();
            })
            game.on("Player.getPointedVecY",()=>{
                Player.getPointedVecY();
            })
            game.on("Player.getPointedVecZ",()=>{
                Player.getPointedVecZ();
            })
            game.on("Player.getSaturation",()=>{
                Player.getSaturation();
            })
            game.on("Player.getSelectedSlotId",()=>{
                Player.getSelectedSlotId();
            })
            game.on("Player.getX",()=>{
                Player.getX();
            })
            game.on("Player.getY",()=>{
                Player.getY();
            })
            game.on("Player.getZ",()=>{
                Player.getZ();
            })
            game.on("Player.isFlying",()=>{
                Player.isFlying();
            })
            game.on("Player.isPlayer",(par1Object)=>{
                Player.isPlayer(par1Object);
            })
            game.on("Player.setArmorSlot",(par1int, par2int, par3int)=>{
                Player.setArmorSlot(par1int, par2int, par3int);
            })
            game.on("Player.setCanFly",(par1boolean)=>{
                Player.setCanFly(par1boolean);
            })
            game.on("Player.setExhaustion",(par1double)=>{
                Player.setExhaustion(par1double);
            })
            game.on("Player.setExp",(par1double)=>{
                Player.setExp(par1double);
            })
            game.on("Player.setFlying",(par1boolean)=>{
                Player.setFlying(par1boolean);
            })
            game.on("Player.setHealth",(par1int)=>{
                Player.setHealth(par1int);
            })
            game.on("Player.setHunger",(par1double)=>{
                Player.setHunger(par1double);
            })
            game.on("Player.setLevel",(par1int)=>{
                Player.setLevel(par1int);
            })
            game.on("Player.setSaturation",(par1double)=>{
                Player.setSaturation(par1double);
            })
            game.on("Player.setSelectedSlotId",(par1int)=>{
                Player.setSelectedSlotId(par1int);
            })
            game.on("Entity.addEffect",(par1Object, par2int, par3int, par4int, par5boolean, par6boolean)=>{
                Entity.addEffect(par1Object, par2int, par3int, par4int, par5boolean, par6boolean);
            })
            game.on("Entity.getAll",()=>{
                Entity.getAll();
            })
            game.on("Entity.getAnimalAge",(par1Object)=>{
                Entity.getAnimalAge(par1Object);
            })
            game.on("Entity.getArmor",(par1Object, par2int)=>{
                Entity.getArmor(par1Object, par2int);
            })
            game.on("Entity.getArmorDamage",(par1Object, par2int)=>{
                Entity.getArmorDamage(par1Object, par2int);
            })
            game.on("Entity.getEntityTypeId",(par1Object)=>{
                Entity.getEntityTypeId(par1Object);
            })
            game.on("Entity.getHealth",(par1Object)=>{
                Entity.getHealth(par1Object);
            })
            game.on("Entity.getItemEntityCount",(par1Object)=>{
                Entity.getItemEntityCount(par1Object);
            })
            game.on("Entity.getItemEntityData",(par1Object)=>{
                Entity.getItemEntityData(par1Object);
            })
            game.on("Entity.getItemEntityId",(par1Object)=>{
                Entity.getItemEntityId(par1Object);
            })
            game.on("Entity.getMaxHealth",(par1Object)=>{
                Entity.getMaxHealth(par1Object);
            })
            game.on("Entity.getMobSkin",(par1Object)=>{
                Entity.getMobSkin(par1Object);
            })
            game.on("Entity.getNameTag",(par1Object)=>{
                Entity.getNameTag(par1Object);
            })
            game.on("Entity.getPitch",(par1Object)=>{
                Entity.getPitch(par1Object);
            })
            game.on("Entity.getRenderType",(par1Object)=>{
                Entity.getRenderType(par1Object);
            })
            game.on("Entity.getRider",(par1Object)=>{
                Entity.getRider(par1Object);
            })
            game.on("Entity.getRiding",(par1Object)=>{
                Entity.getRiding(par1Object);
            })
            game.on("Entity.getUniqueId",(par1Object)=>{
                Entity.getUniqueId(par1Object);
            })
            game.on("Entity.getVelX",(par1Object)=>{
                Entity.getVelX(par1Object);
            })
            game.on("Entity.getVelY",(par1Object)=>{
                Entity.getVelY(par1Object);
            })
            game.on("Entity.getVelZ",(par1Object)=>{
                Entity.getVelZ(par1Object);
            })
            game.on("Entity.getX",(par1Object)=>{
                Entity.getX(par1Object);
            })
            game.on("Entity.getY",(par1Object)=>{
                Entity.getY(par1Object);
            })
            game.on("Entity.getYaw",(par1Object)=>{
                Entity.getYaw(par1Object);
            })
            game.on("Entity.getZ",(par1Object)=>{
                Entity.getZ(par1Object);
            })
            game.on("Entity.isSneaking",(par1Object)=>{
                Entity.isSneaking(par1Object);
            })
            game.on("Entity.remove",(par1Object)=>{
                Entity.remove(par1Object);
            })
            game.on("Entity.removeAllEffects",(par1Object)=>{
                Entity.removeAllEffects(par1Object);
            })
            game.on("Entity.removeEffect",(par1Object, par2int)=>{
                Entity.removeEffect(par1Object, par2int);
            })
            game.on("Entity.rideAnimal",(par1Object, par2Object)=>{
                Entity.rideAnimal(par1Object, par2Object);
            })
            game.on("Entity.setAnimalAge",(par1Object, par2int)=>{
                Entity.setAnimalAge(par1Object, par2int);
            })
            game.on("Entity.setArmor",(par1Object, par2int, par3int, par4int)=>{
                Entity.setArmor(par1Object, par2int, par3int, par4int);
            })
            game.on("Entity.setCape",(par1Object, par2String)=>{
                Entity.setCape(par1Object, par2String);
            })
            game.on("Entity.setCarriedItem",(par1Object, par2int, par3int, par4int)=>{
                Entity.setCarriedItem(par1Object, par2int, par3int, par4int);
            })
            game.on("Entity.setCollisionSize",(par1Object, par2double, par3double)=>{
                Entity.setCollisionSize(par1Object, par2double, par3double);
            })
            game.on("Entity.setFireTicks",(par1Object, par2int)=>{
                Entity.setFireTicks(par1Object, par2int);
            })
            game.on("Entity.setHealth",(par1Object, par2int)=>{
                Entity.setHealth(par1Object, par2int);
            })
            game.on("Entity.setMaxHealth",(par1Object, par2int)=>{
                Entity.setMaxHealth(par1Object, par2int);
            })
            game.on("Entity.setMobSkin",(par1Object, par2String)=>{
                Entity.setMobSkin(par1Object, par2String);
            })
            game.on("Entity.setNameTag",(par1Object, par2String)=>{
                Entity.setNameTag(par1Object, par2String);
            })
            game.on("Entity.setPosition",(par1Object, par2double, par3double, par4double)=>{
                Entity.setPosition(par1Object, par2double, par3double, par4double);
            })
            game.on("Entity.setPositionRelative",(par1Object, par2double, par3double, par4double)=>{
                Entity.setPositionRelative(par1Object, par2double, par3double, par4double);
            })
            game.on("Entity.setRenderType",(par1Object, par2int)=>{
                Entity.setRenderType(par1Object, par2int);
            })
            game.on("Entity.setRot",(par1Object, par2double, par3double)=>{
                Entity.setRot(par1Object, par2double, par3double);
            })
            game.on("Entity.setSneaking",(par1Object, par2boolean)=>{
                Entity.setSneaking(par1Object, par2boolean);
            })
            game.on("Entity.setVelX",(par1Object, par2double)=>{
                Entity.setVelX(par1Object, par2double);
            })
            game.on("Entity.setVelY",(par1Object, par2double)=>{
                Entity.setVelY(par1Object, par2double);
            })
            game.on("Entity.setVelZ",(par1Object, par2double)=>{
                Entity.setVelZ(par1Object, par2double);
            })
            game.on("Entity.spawnMob",(par1double, par2double, par3double, par4int, par5String)=>{
                Entity.spawnMob(par1double, par2double, par3double, par4int, par5String);
            })
            game.on("Item.addCraftRecipe",(par1int, par2int, par3int, par4Scriptable)=>{
                Item.addCraftRecipe(par1int, par2int, par3int, par4Scriptable);
            })
            game.on("Item.addFurnaceRecipe",(par1int, par2int, par3int)=>{
                Item.addFurnaceRecipe(par1int, par2int, par3int);
            })
            game.on("Item.addShapedRecipe",(par1int, par2int, par3int, par4Scriptable, par5Scriptable)=>{
                Item.addShapedRecipe(par1int, par2int, par3int, par4Scriptable, par5Scriptable);
            })
            game.on("Item.defineArmor",(par1int, par2String, par3int, par4String, par5String, par6int, par7int, par8int)=>{
                Item.defineArmor(par1int, par2String, par3int, par4String, par5String, par6int, par7int, par8int);
            })
            game.on("Item.getName",(par1int, par2int, par3boolean)=>{
                Item.getName(par1int, par2int, par3boolean);
            })
            game.on("Item.isValidItem",(par1int)=>{
                Item.isValidItem(par1int);
            })
            game.on("Item.setCategory",(par1int, par2int)=>{
                Item.setCategory(par1int, par2int);
            })
            game.on("Item.setHandEquipped",(par1int, par2boolean)=>{
                Item.setHandEquipped(par1int, par2boolean);
            })
            game.on("Item.setMaxDamage",(par1int, par2int)=>{
                Item.setMaxDamage(par1int, par2int);
            })
            game.on("Item.setProperties",(par1int, par2Object)=>{
                Item.setProperties(par1int, par2Object);
            })
            game.on("Block.defineBlock",(par1int, par2String, par3Object, par4Object, par5Object, par6Object)=>{
                Block.defineBlock(par1int, par2String, par3Object, par4Object, par5Object, par6Object);
            })
            game.on("Block.getAllBlockIds",()=>{
                Block.getAllBlockIds();
            })
            game.on("Block.getDestroyTime",(par1int, par2int)=>{
                Block.getDestroyTime(par1int, par2int);
            })
            game.on("Block.getFriction",(par1int, par2int)=>{
                Block.getFriction(par1int, par2int);
            })
            game.on("Block.getRenderType",(par1int)=>{
                Block.getRenderType(par1int);
            })
            game.on("Block.setColor",(par1int, par2Scriptable)=>{
                Block.setColor(par1int, par2Scriptable);
            })
            game.on("Block.setDestroyTime",(par1int, par2double)=>{
                Block.setDestroyTime(par1int, par2double);
            })
            game.on("Block.setExplosionResistance",(par1int, par2double)=>{
                Block.setExplosionResistance(par1int, par2double);
            })
            game.on("Block.setFriction",(par1int, par2double)=>{
                Block.setFriction(par1int, par2double);
            })
            game.on("Block.setLightLevel",(par1int, par2int)=>{
                Block.setLightLevel(par1int, par2int);
            })
            game.on("Block.setLightOpacity",(par1int, par2int)=>{
                Block.setLightOpacity(par1int, par2int);
            })
            game.on("Block.setRedstoneConsumer",(par1int, par2boolean)=>{
                Block.setRedstoneConsumer(par1int, par2boolean);
            })
            game.on("Block.setRenderLayer",(par1int, par2int)=>{
                Block.setRenderLayer(par1int, par2int);
            })
            game.on("Block.setRenderType",(par1int, par2int)=>{
                Block.setRenderType(par1int, par2int);
            })
            game.on("Block.setShape",(par1int, par2double, par3double, par4double, par5double, par6double, par7double, par8int)=>{
                Block.setShape(par1int, par2double, par3double, par4double, par5double, par6double, par7double, par8int);
            })
            game.on("Server.getAddress",()=>{
                Server.getAddress();
            })
            game.on("Server.getAllPlayerNames",()=>{
                Server.getAllPlayerNames();
            })
            game.on("Server.getAllPlayers",()=>{
                Server.getAllPlayers();
            })
            game.on("Server.getPort",()=>{
                Server.getPort();
            })
            game.on("Server.joinServer",(par1String, par2int)=>{
                Server.joinServer(par1String, par2int);
            })
            game.on("Server.sendChat",(par1String)=>{
                Server.sendChat(par1String);
            })
                global._attackHook(attacker, victim){
                    game.emit("entity.attack", attacker, victim);
                }
            
            
                global._chatHook(str){
                    game.emit("local.anonymous.chat", str);
                }
            
            
                global._destroyBlock(x, y, z, side){
                    game.emit("block.destroy", x, y, z, side);
                }
            
            
                global._projectileHitEntityHook(projectile, targetEntity){
                    game.emit("projectile.hit.entity", projectile, targetEntity);
                }
            
            
                global._eatHook(hearts, saturationRatio){
                    game.emit("player.eat", hearts, saturationRatio);
                }
            
            
                global._entityAddedHook(entity){
                    game.emit("entity.add", entity);
                }
            
            
                global._entityRemovedHook(entity){
                    game.emit("entity.remove", entity);
                }
            
            
                global._explodeHook(entity, x, y, z, power, onFire){
                    game.emit("level.explode", entity, x, y, z, power, onFire);
                }
            
            
                global._serverMessageReceiveHook(str){
                    game.emit("server.anonymous.chat", str);
                }
            
            
                global._chatReceiveHook(str, sender){
                    game.emit("server.named.chat", str, sender);
                }
            
            
                global._leaveGame(){
                    game.emit("level.unload.start");
                }
            
            
                global._deathHook(attacker, victim){
                    game.emit("entity.death", attacker, victim);
                }
            
            
                global._redstoneUpdateHook(x, y, z, newCurrent, someBooleanIDontKnow, blockId, blockData){
                    game.emit("level.redstone", x, y, z, newCurrent, someBooleanIDontKnow, blockId, blockData);
                }
            
            
                global._selectLevelHook(){
                    game.emit("level.load.start");
                }
            
            
                global._newLevel(){
                    game.emit("level.load.end");
                }
            
            
                global._startDestroyBlock(x, y, z, side){
                    game.emit("level.destroy.start", x, y, z, side);
                }
            
            
                global._projectileHitBlockHook(projectile, blockX, blockY, blockZ, side){
                    game.emit("projectile.hit.block", projectile, blockX, blockY, blockZ, side);
                }
            
            
                global._modTick(){
                    game.emit("tick");
                }
            
            
                global._useItem(x, y, z, itemid, blockid, side, itemDamage, blockDamage){
                    game.emit("use", x, y, z, itemid, blockid, side, itemDamage, blockDamage);
                }
            
            

//Common start
autoUpdater(game,config);

//Mod start
mod(game,config);

//...
game.emit("modLoaded");
