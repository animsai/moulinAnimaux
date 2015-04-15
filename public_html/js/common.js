/* 
 * Contains all the global variables as well as all the file manifests needed for the game
 * Author : J. Travnjak
 * Date : may 2014
 */

var IMGFOLDER = "./media/images/";
var SNDFOLDER = "./media/sounds/";
var stage;
var nav;

var NAV_FOLDER = "nav/";
var ANIMAL_FOLDER = "animaux/";
var FB_FOLDER = "feedbacks/";

var OUTLINE_SUFFIX = "_outline";
var SOUND_SUFFIX = "_snd";
var SCENE_ID = "scene";
var FEEDBACK_SUFFIX = "_fb";
var CONSINGES = "consignes";


var userScore = [
    /*{user: "test", levelId: "animaux1", theme: "animaux", score: 1},
    {user: "test", levelId: "animaux2", theme: "animaux", score: 2}*/
];

var InteractionTypeEnum = {
    GUIDED: 1,
    FREEDRAG: 2,
    GUIDEDDRAG: 3
};

var themes = [
    {id: "nav"},
    {id: "animaux"}
];

/*******************************global files, can be used anywhere in the game****************************************************/
var interLevel_fileManifest = [
    {id: "menu", src: IMGFOLDER + NAV_FOLDER + "menu.png", x: 180, y: 400},
    {id: "replay", src: IMGFOLDER + NAV_FOLDER + "replay.png", x: 410, y: 400},
    {id: "next", src: IMGFOLDER + NAV_FOLDER + "next.png", x: 630, y: 400}
];

//global var used to inform user that there is a sound going on and that he has to wait
var speakerIconFile = {id: "speaker", src: IMGFOLDER + NAV_FOLDER + "ear.png", x: 410, y: 350};
//global file used in different contexts to go back to previous screen
var backButtonFile = {id: "previous_small", src: IMGFOLDER + NAV_FOLDER + "previous_small.png", x: 35, y: 35};
var repeatButtonFile = {id: "repeat", src: IMGFOLDER + NAV_FOLDER + "repeat.png", x: 35, y: 650};
var closeButtonFile = {id: "close", src: IMGFOLDER + NAV_FOLDER + "close.png", x: 135, y: 35};
var introSnd = {id: "intro_snd", src: SNDFOLDER + NAV_FOLDER + "intro.wav"};
var introImg = {id: "introImg", src: IMGFOLDER + NAV_FOLDER + "ecran_debut_couleurs.png", x: 0, y: 0};

var feedback_fileManifest = [
    {id: "pos0_fb", src: SNDFOLDER + FB_FOLDER + "1animaux.reponse.bon.1.mp3"},
    {id: "pos1_fb", src: SNDFOLDER + FB_FOLDER + "1animaux.reponse.bon.2.mp3"},
    {id: "pos2_fb", src: SNDFOLDER + FB_FOLDER + "1animaux.reponse.bon.3.mp3"},
    {id: "neg0_fb", src: SNDFOLDER + FB_FOLDER + "1animaux.reponse.mauvais.1.mp3"},
    {id: "neg1_fb", src: SNDFOLDER + FB_FOLDER + "1animaux.reponse.mauvais.2.mp3"},
    {id: "neg2_fb", src: SNDFOLDER + FB_FOLDER + "1animaux.reponse.mauvais.3.mp3"},
    {id: "animaux_conclusion_fb", src: SNDFOLDER + ANIMAL_FOLDER + FB_FOLDER + "1animaux.conclusion.1.mp3"}
    
];
/***********************************************************************""""""""""""""""""""""""""""**************************/


/***************************************NAVIGATION FILES ****************************""""""""""""""""******************************/
var nav_fileManifest = [
    //background
    {id: "scene", src: IMGFOLDER + NAV_FOLDER + "niveau1_decor_grand.png"},
    //level images
    {id: "animaux", src: IMGFOLDER + NAV_FOLDER + "niveau1_animaux.png", x: 40, y: 180},
        //instruction and feedback sounds
    {id: "nav_consignes_fb", src: SNDFOLDER + NAV_FOLDER + "consignes.wav"},
    {id: "subNav_consignes_fb", src: SNDFOLDER + NAV_FOLDER + "son_5.wav"}
];

var animaux_nav_fileManifest = [
    //background
    {id: "scene", src: IMGFOLDER + NAV_FOLDER + "niveau2_animaux_decor.png"},
    //level images
    {id: "animauxEx1", levelId: "animaux1", src: IMGFOLDER + NAV_FOLDER + "niveau2_animaux_ex1.png", x: 42, y: 254},
    {id: "animauxEx2", levelId: "animaux2", src: IMGFOLDER + NAV_FOLDER + "niveau2_animaux_ex2.png", x: 228, y: 254},
    {id: "animauxEx3", levelId: "animaux3", src: IMGFOLDER + NAV_FOLDER + "niveau2_animaux_ex3.png", x: 408, y: 254},
    {id: "animauxEx4", levelId: "animaux4", src: IMGFOLDER + NAV_FOLDER + "niveau2_animaux_ex4.png", x: 598, y: 254},
    {id: "animauxEx5", levelId: "animaux5", src: IMGFOLDER + NAV_FOLDER + "niveau2_animaux_ex5.png", x: 778, y: 254},
    {id: "animauxEx6", levelId: "animaux6", src: IMGFOLDER + NAV_FOLDER + "niveau2_animaux_ex6.png", x: 42, y: 454},
    {id: "animauxEx7", levelId: "animaux7", src: IMGFOLDER + NAV_FOLDER + "niveau2_animaux_ex7.png", x: 228, y: 454}
];

/**************************************************************************************************************************/


/*******************************************************LEVEL SPECIFIC FILES ******************************************************/

//keep the levels in the correct order, otherwise it won't work for the score calculations
var levels = [
    {id: "animaux1", theme: "animaux", media: "animaux1_fileManifest", interaction: InteractionTypeEnum.GUIDED},
    {id: "animaux2", theme: "animaux", media: "animaux2_fileManifest", interaction: InteractionTypeEnum.GUIDED},
    {id: "animaux3", theme: "animaux", media: "animaux3_fileManifest", interaction: InteractionTypeEnum.GUIDED},
    {id: "animaux4", theme: "animaux", media: "animaux4_fileManifest", interaction: InteractionTypeEnum.GUIDED},
    {id: "animaux5", theme: "animaux", media: "animaux5_fileManifest", interaction: InteractionTypeEnum.GUIDED},
    {id: "animaux6", theme: "animaux", media: "animaux6_fileManifest", interaction: InteractionTypeEnum.GUIDED},
    {id: "animaux7", theme: "animaux", media: "animaux7_fileManifest", interaction: InteractionTypeEnum.GUIDED}
   ];


/***
 * array of files needed in  levels
 * respect the following order
 * first item shall be the background of the scene
 * followed by outline images
 * then clickable images
 * then  level instructions
 * */
var animaux1_fileManifest = [
    //background
    {id: "scene", src: IMGFOLDER + ANIMAL_FOLDER + "level1/decor_champ.jpg"},
    //image outlines
    {id: "papillon_outline", src: IMGFOLDER + ANIMAL_FOLDER + "level1/animaux_papillon_seul.png", x: 335, y: 458},
    {id: "oiseau_outline", src: IMGFOLDER + ANIMAL_FOLDER + "level1/animaux_oiseau_seul.png", x: 389, y: 150},
    {id: "tortue_outline", src: IMGFOLDER + ANIMAL_FOLDER + "level1/animaux_tortue_seul.png", x: 493, y: 295},
    {id: "lapin_outline", src: IMGFOLDER + ANIMAL_FOLDER + "level1/animaux_lapin_seul.png", x: 130, y: 280},
    {id: "chat_outline", src: IMGFOLDER + ANIMAL_FOLDER + "level1/animaux_chat_seul.png", x: 29, y: 440},
    //level images
    {id: "papillon", src: IMGFOLDER + ANIMAL_FOLDER + "level1/animaux_papillon.png", x: 790, y: 35},
    {id: "oiseau", src: IMGFOLDER + ANIMAL_FOLDER + "level1/animaux_oiseau.png", x: 790, y: 160},
    {id: "tortue", src: IMGFOLDER + ANIMAL_FOLDER + "level1/animaux_tortue.png", x: 790, y: 296},
    {id: "lapin", src: IMGFOLDER + ANIMAL_FOLDER + "level1/animaux_lapin.png", x: 790, y: 420},
    {id: "chat", src: IMGFOLDER + ANIMAL_FOLDER + "level1/animaux_chat.png", x: 790, y: 576},
    //level sounds
    {id: "papillon_snd", src: SNDFOLDER + ANIMAL_FOLDER + "level1/1animaux_serie1_6.mp3"},
    {id: "oiseau_snd", src: SNDFOLDER + ANIMAL_FOLDER + "level1/1animaux_serie1_1.mp3"},
    {id: "tortue_snd", src: SNDFOLDER + ANIMAL_FOLDER + "level1/1animaux_serie1_4.mp3"},
    {id: "lapin_snd", src: SNDFOLDER + ANIMAL_FOLDER + "level1/1animaux_serie1_2.mp3"},
    {id: "chat_snd", src: SNDFOLDER + ANIMAL_FOLDER + "level1/1animaux_serie1_3.mp3"},
    //instruction and feedback sounds
    {id: "consignes_animaux1", src: SNDFOLDER + ANIMAL_FOLDER + "level1/1animaux_serie1_consigne_1.mp3"}
];


var animaux2_fileManifest = [
    //background
    {id: "scene", src: IMGFOLDER + ANIMAL_FOLDER + "level2/animaux_decor_champ2.png"},
    //image outlines
    {id: "abeille_outline", src: IMGFOLDER + ANIMAL_FOLDER + "level2/animaux_abeille_seul.png", x: 360, y: 500},
    {id: "poule_outline", src: IMGFOLDER + ANIMAL_FOLDER + "level2/animaux_poule_seul.png", x: 52, y: 430},
    {id: "chien_outline", src: IMGFOLDER + ANIMAL_FOLDER + "level2/animaux_chien_seul.png", x: 148, y: 539},
    {id: "cochon_outline", src: IMGFOLDER + ANIMAL_FOLDER + "level2/animaux_cochon_seul.png", x: 599, y: 540},
    {id: "vache_outline", src: IMGFOLDER + ANIMAL_FOLDER + "level2/animaux_vache_seul.png", x: 460, y: 300},
    //level images
    {id: "abeille", src: IMGFOLDER + ANIMAL_FOLDER + "level2/animaux_abeille.png", x: 790, y: 35},
    {id: "poule", src: IMGFOLDER + ANIMAL_FOLDER + "level2/animaux_poule.png", x: 790, y: 146},
    {id: "chien", src: IMGFOLDER + ANIMAL_FOLDER + "level2/animaux_chien.png", x: 790, y: 290},
    {id: "cochon", src: IMGFOLDER + ANIMAL_FOLDER + "level2/animaux_cochon.png", x: 790, y: 455},
    {id: "vache", src: IMGFOLDER + ANIMAL_FOLDER + "level2/animaux_vache.png", x: 790, y: 600},
    //level sounds
    {id: "abeille_snd", src: SNDFOLDER + ANIMAL_FOLDER + "level2/1animaux.serie2.6.mp3"},
    {id: "poule_snd", src: SNDFOLDER + ANIMAL_FOLDER + "level2/1animaux.serie2.1.mp3"},
    {id: "chien_snd", src: SNDFOLDER + ANIMAL_FOLDER + "level2/1animaux.serie2.3.mp3"},
    {id: "cochon_snd", src: SNDFOLDER + ANIMAL_FOLDER + "level2/1animaux.serie2.4.mp3"},
    {id: "vache_snd", src: SNDFOLDER + ANIMAL_FOLDER + "level2/1animaux.serie2.2.mp3"},
    //instruction and feedback sounds
    {id: "consignes_animaux2", src: SNDFOLDER + ANIMAL_FOLDER + "level2/1animaux.serie2.consigne.1.mp3"}
];

var animaux3_fileManifest = [
    //background
    {id: "scene", src: IMGFOLDER + ANIMAL_FOLDER + "level3/animaux_decor_ex3.png"},
    //image outlines
    {id: "grenouille_outline", src: IMGFOLDER + ANIMAL_FOLDER + "level3/animaux_grenouille_seul.png", x: 651, y: 615},
    {id: "ecureuil_outline", src: IMGFOLDER + ANIMAL_FOLDER + "level3/animaux_ecureuil_seul.png", x: 42, y: 425},
    {id: "mouton_outline", src: IMGFOLDER + ANIMAL_FOLDER + "level3/animaux_mouton_seul.png", x: 519, y: 448},
    {id: "loup_outline", src: IMGFOLDER + ANIMAL_FOLDER + "level3/animaux_loup_seul.png", x: 81, y: 535},
    {id: "biche_outline", src: IMGFOLDER + ANIMAL_FOLDER + "level3/animaux_biche_seul.png", x: 442, y: 262},
    //level images
    {id: "grenouille", src: IMGFOLDER + ANIMAL_FOLDER + "level3/animaux_grenouille.png", x: 790, y: 35},
    {id: "ecureuil", src: IMGFOLDER + ANIMAL_FOLDER + "level3/animaux_ecureuil.png", x: 790, y: 146},
    {id: "mouton", src: IMGFOLDER + ANIMAL_FOLDER + "level3/animaux_mouton.png", x: 790, y: 285},
    {id: "loup", src: IMGFOLDER + ANIMAL_FOLDER + "level3/animaux_loup.png", x: 790, y: 435},
    {id: "biche", src: IMGFOLDER + ANIMAL_FOLDER + "level3/animaux_biche.png", x: 790, y: 600},
    //level sounds
    {id: "grenouille_snd", src: SNDFOLDER + ANIMAL_FOLDER + "level3/1animaux.serie3.6.mp3"},
    {id: "ecureuil_snd", src: SNDFOLDER + ANIMAL_FOLDER + "level3/1animaux.serie3.3.mp3"},
    {id: "mouton_snd", src: SNDFOLDER + ANIMAL_FOLDER + "level3/1animaux.serie3.5.mp3"},
    {id: "loup_snd", src: SNDFOLDER + ANIMAL_FOLDER + "level3/1animaux.serie3.1.mp3"},
    {id: "biche_snd", src: SNDFOLDER + ANIMAL_FOLDER + "level3/1animaux.serie3.2.mp3"},
    //instruction and feedback sounds
    {id: "consignes_animaux3", src: SNDFOLDER + ANIMAL_FOLDER + "level3/1animaux.serie3.consigne.1.mp3"}
];

var animaux4_fileManifest = [
    //background
    {id: "scene", src: IMGFOLDER + ANIMAL_FOLDER + "level4/animaux_decor_ex4.png"},
    //image outlines
    {id: "oie_outline", src: IMGFOLDER + ANIMAL_FOLDER + "level4/animaux_oie_seul.png", x: 640, y: 540},
    {id: "dindon_outline", src: IMGFOLDER + ANIMAL_FOLDER + "level4/animaux_dindon_seul.png", x: 48, y: 400},
    {id: "agneau_outline", src: IMGFOLDER + ANIMAL_FOLDER + "level4/animaux_agneau_seul.png", x: 135, y: 570},
    {id: "chevre_outline", src: IMGFOLDER + ANIMAL_FOLDER + "level4/animaux_chevre_seul.png", x: 425, y: 370},
    {id: "poney_outline", src: IMGFOLDER + ANIMAL_FOLDER + "level4/animaux_poney_seul.png", x: 120, y: 214},
    //level images
    {id: "oie", src: IMGFOLDER + ANIMAL_FOLDER + "level4/animaux_oie.png", x: 790, y: 35},
    {id: "dindon", src: IMGFOLDER + ANIMAL_FOLDER + "level4/animaux_dindon.png", x: 790, y: 166},
    {id: "agneau", src: IMGFOLDER + ANIMAL_FOLDER + "level4/animaux_agneau.png", x: 790, y: 295},
    {id: "chevre", src: IMGFOLDER + ANIMAL_FOLDER + "level4/animaux_chevre.png", x: 790, y: 445},
    {id: "poney", src: IMGFOLDER + ANIMAL_FOLDER + "level4/animaux_poney.png", x: 790, y: 600},
    //level sounds
    {id: "oie_snd", src: SNDFOLDER + ANIMAL_FOLDER + "level4/1animaux.serie4.4.mp3"},
    {id: "dindon_snd", src: SNDFOLDER + ANIMAL_FOLDER + "level4/1animaux.serie4.6.mp3"},
    {id: "agneau_snd", src: SNDFOLDER + ANIMAL_FOLDER + "level4/1animaux.serie4.2.mp3"},
    {id: "chevre_snd", src: SNDFOLDER + ANIMAL_FOLDER + "level4/1animaux.serie4.5.mp3"},
    {id: "poney_snd", src: SNDFOLDER + ANIMAL_FOLDER + "level4/1animaux.serie4.3.mp3"},
    //instruction and feedback sounds
    {id: "consignes_animaux4", src: SNDFOLDER + ANIMAL_FOLDER + "level4/1animaux.serie4.consigne.1.mp3"}
];

var animaux5_fileManifest = [
    //background
    {id: "scene", src: IMGFOLDER + ANIMAL_FOLDER + "level5/animaux_decor_ex5.png"},
    //image outlines
    {id: "singe_outline", src: IMGFOLDER + ANIMAL_FOLDER + "level5/animaux_singe_seul.png", x: 250, y: 77},
    {id: "lion_outline", src: IMGFOLDER + ANIMAL_FOLDER + "level5/animaux_lion_seul.png", x: 440, y: 270},
    {id: "crocodile_outline", src: IMGFOLDER + ANIMAL_FOLDER + "level5/animaux_crocodile_seul.png", x: 360, y: 650},
    {id: "elephant_outline", src: IMGFOLDER + ANIMAL_FOLDER + "level5/animaux_elephant_seul.png", x: 70, y: 430},
    {id: "girafe_outline", src: IMGFOLDER + ANIMAL_FOLDER + "level5/animaux_girafe_seul.png", x: 70, y: 214},
    //level images
    {id: "singe", src: IMGFOLDER + ANIMAL_FOLDER + "level5/animaux_singe.png", x: 790, y: 35},
    {id: "lion", src: IMGFOLDER + ANIMAL_FOLDER + "level5/animaux_lion.png", x: 790, y: 145},
    {id: "crocodile", src: IMGFOLDER + ANIMAL_FOLDER + "level5/animaux_crocodile.png", x: 790, y: 265},
    {id: "elephant", src: IMGFOLDER + ANIMAL_FOLDER + "level5/animaux_elephant.png", x: 790, y: 360},
    {id: "girafe", src: IMGFOLDER + ANIMAL_FOLDER + "level5/animaux_girafe.png", x: 790, y: 530},
    //level sounds
    {id: "singe_snd", src: SNDFOLDER + ANIMAL_FOLDER + "level5/1animaux.serie5.4.mp3"},
    {id: "lion_snd", src: SNDFOLDER + ANIMAL_FOLDER + "level5/1animaux.serie5.3.mp3"},
    {id: "crocodile_snd", src: SNDFOLDER + ANIMAL_FOLDER + "level5/1animaux.serie5.5.mp3"},
    {id: "elephant_snd", src: SNDFOLDER + ANIMAL_FOLDER + "level5/1animaux.serie5.1.mp3"},
    {id: "girafe_snd", src: SNDFOLDER + ANIMAL_FOLDER + "level5/1animaux.serie5.2.mp3"},
    //instruction and feedback sounds
    {id: "consignes_animaux5", src: SNDFOLDER + ANIMAL_FOLDER + "level5/1animaux.serie5.consigne.1.mp3"}
];

var animaux6_fileManifest = [
    //background
    {id: "scene", src: IMGFOLDER + ANIMAL_FOLDER + "level6/animaux_decor_ex6.png"},
    //image outlines
    {id: "poisson_outline", src: IMGFOLDER + ANIMAL_FOLDER + "level6/animaux_poisson_seul.png", x: 640, y: 660},
    {id: "phoque_outline", src: IMGFOLDER + ANIMAL_FOLDER + "level6/animaux_phoque_seul.png", x: 86, y: 320},
    {id: "pinguin_outline", src: IMGFOLDER + ANIMAL_FOLDER + "level6/animaux_pinguin_seul.png", x: 500, y: 370},
    {id: "ours_outline", src: IMGFOLDER + ANIMAL_FOLDER + "level6/animaux_ours_seul.png", x: 285, y: 190},
    {id: "baleine_outline", src: IMGFOLDER + ANIMAL_FOLDER + "level6/animaux_baleine_seul.png", x: 40, y: 495},
    //level images
    {id: "poisson", src: IMGFOLDER + ANIMAL_FOLDER + "level6/animaux_poisson.png", x: 790, y: 35},
    {id: "phoque", src: IMGFOLDER + ANIMAL_FOLDER + "level6/animaux_phoque.png", x: 790, y: 166},
    {id: "pinguin", src: IMGFOLDER + ANIMAL_FOLDER + "level6/animaux_pinguin.png", x: 790, y: 310},
    {id: "ours", src: IMGFOLDER + ANIMAL_FOLDER + "level6/animaux_ours.png", x: 790, y: 465},
    {id: "baleine", src: IMGFOLDER + ANIMAL_FOLDER + "level6/animaux_baleine.png", x: 790, y: 615},
    //level sounds
    {id: "poisson_snd", src: SNDFOLDER + ANIMAL_FOLDER + "level6/1animaux.serie6.6.mp3"},
    {id: "phoque_snd", src: SNDFOLDER + ANIMAL_FOLDER + "level6/1animaux.serie6.5.mp3"},
    {id: "pinguin_snd", src: SNDFOLDER + ANIMAL_FOLDER + "level6/1animaux.serie6.2.mp3"},
    {id: "ours_snd", src: SNDFOLDER + ANIMAL_FOLDER + "level6/1animaux.serie6.1.mp3"},
    {id: "baleine_snd", src: SNDFOLDER + ANIMAL_FOLDER + "level6/1animaux.serie6.4.mp3"},
    //instruction and feedback sounds
    {id: "consignes_animaux6", src: SNDFOLDER + ANIMAL_FOLDER + "level6/1animaux.serie6.consigne.1.mp3"}
];

var animaux7_fileManifest = [
    //background
    {id: "scene", src: IMGFOLDER + ANIMAL_FOLDER + "level7/animaux_decor_ex7.png"},
    //image outlines
    {id: "tigre_outline", src: IMGFOLDER + ANIMAL_FOLDER + "level7/animaux_tigre_seul.png", x: 440, y: 390},
    {id: "gazelle_outline", src: IMGFOLDER + ANIMAL_FOLDER + "level7/animaux_gazelle_seul.png", x: 610, y: 180},
    {id: "zebre_outline", src: IMGFOLDER + ANIMAL_FOLDER + "level7/animaux_zebre_seul.png", x: 45, y: 320},
    {id: "hippopotame_outline", src: IMGFOLDER + ANIMAL_FOLDER + "level7/animaux_hippopotame_seul.png", x: 400, y: 580},
    {id: "buffle_outline", src: IMGFOLDER + ANIMAL_FOLDER + "level7/animaux_buffle_seul.png", x: 40, y: 514},
    //level images
    {id: "tigre", src: IMGFOLDER + ANIMAL_FOLDER + "level7/animaux_tigre.png", x: 790, y: 35},
    {id: "gazelle", src: IMGFOLDER + ANIMAL_FOLDER + "level7/animaux_gazelle.png", x: 790, y: 166},
    {id: "zebre", src: IMGFOLDER + ANIMAL_FOLDER + "level7/animaux_zebre.png", x: 790, y: 320},
    {id: "hippopotame", src: IMGFOLDER + ANIMAL_FOLDER + "level7/animaux_hippopotame.png", x: 790, y: 465},
    {id: "buffle", src: IMGFOLDER + ANIMAL_FOLDER + "level7/animaux_buffle.png", x: 790, y: 605},
    //level sounds
    {id: "tigre_snd", src: SNDFOLDER + ANIMAL_FOLDER + "level7/1animaux.serie7.3.mp3"},
    {id: "gazelle_snd", src: SNDFOLDER + ANIMAL_FOLDER + "level7/1animaux.serie7.5.mp3"},
    {id: "zebre_snd", src: SNDFOLDER + ANIMAL_FOLDER + "level7/1animaux.serie7.2.mp3"},
    {id: "hippopotame_snd", src: SNDFOLDER + ANIMAL_FOLDER + "level7/1animaux.serie7.4.mp3"},
    {id: "buffle_snd", src: SNDFOLDER + ANIMAL_FOLDER + "level7/1animaux.serie7.1.mp3"},
    //instruction and feedback sounds
    {id: "consignes_animaux7", src: SNDFOLDER + ANIMAL_FOLDER + "level7/1animaux.serie7.consigne.1.mp3"}
];


/**************************************************************************************************************************/



/************************************************CONTAINERS FOR ALL THE OTHER MANIFESTS **************************************************************************/

/*these files are the ones that are loaded in the beggining of the game
 * they are the most needed for the player to start playing*/
var coreFiles = [interLevel_fileManifest, nav_fileManifest, feedback_fileManifest, speakerIconFile, backButtonFile, introImg,
    animaux_nav_fileManifest];

/**************************************************************************************************************************/