const iconDir = "icons/gameicons"

interface Game {
    title: string,
    iconSrc: string,
    demoSrc?: string,
    playStoreLink?: string,
    appStoreLink?: string
}

export const gameStack: Game[] = [
    {
        title: "Prank Master 3D",
        iconSrc: `${iconDir}/PrankMaster3D.png`,
        demoSrc: "https://www.youtube.com/embed/T5vew4xCz2Y",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.alphapotato.prankster",
        appStoreLink: "https://apps.apple.com/us/app/prank-master-3d/id1528127833"
    },
    {
        title: "Pawn Shop Master",
        iconSrc: `${iconDir}/PawnShopMaster.png`,
        demoSrc: "https://www.youtube.com/embed/gWW0jWzE8LA",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.alphapotato.pawnshopmaster",
        appStoreLink: "https://apps.apple.com/us/app/pawn-shop-master/id1511472595"
    },
    {
        title: "Ragdoll Stunt Hero",
        iconSrc: `${iconDir}/RagdollStuntHero.png`,
        demoSrc: "https://www.youtube.com/embed/VfJkSiRkzKY",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.alphapotato.ragdollstunthero",
    },
    {
        title: "Circle Hero 3D",
        iconSrc: `${iconDir}/CircleHero3D.png`,
        demoSrc: "https://www.youtube.com/embed/vskOQfBKjXk",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.alphapotato.circlehero",
    },
    {
        title: "Blow N Flow 3D",
        iconSrc: `${iconDir}/BlowNFlow.png`,
        demoSrc: "https://www.youtube.com/embed/mzmF12myhMg",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.alphapotato.blowflow",
    },
    {
        title: "Plushie Wrestling",
        iconSrc: `${iconDir}/PlushieWrestling.png`,
        demoSrc: "https://www.youtube.com/embed/hBdcyFpXATI",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.alphapotato.plushiewrestling",
    },
    {
        title: "Bubble Draw 3D",
        iconSrc: `${iconDir}/BubbleDraw3D.png`,
        demoSrc: "https://www.youtube.com/embed/m_Bn0t-6FeE",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.kolpoverse.bubbledraw3d",
    },
    {
        title: "Pixel Buster",
        iconSrc: `${iconDir}/PixelBuster.png`,
        demoSrc: "https://www.youtube.com/embed/FP9GrJWw3tw",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.kolpoverse.pixelbuster",
    },
    {
        title: "Shell Care",
        iconSrc: `${iconDir}/ShellCare.png`,
        demoSrc: "https://www.youtube.com/embed/4J3g3Wo0BUY",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.kolpoverse.shellcare",
    },
    {
        title: "SupaHot Monster",
        iconSrc: `${iconDir}/SupaHotMonsta.png`,
        demoSrc: "https://www.youtube.com/embed/74JDOvIw6to",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.kolpoverse.supahotmonster",
    },
    {
        title: "Connect The City",
        iconSrc: `${iconDir}/ConnectTheCity.png`,
        demoSrc: "https://www.youtube.com/embed/wN6kTZxEQn4",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.alphapotato.connectthecity",
    },
    {
        title: "Idle Cancer",
        iconSrc: `${iconDir}/IdleCancer.png`,
        demoSrc: "https://www.youtube.com/embed/Nv1bqiADAPg",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.alphapotato.idlecancer",
    },
    {
        title: "Age Run 3D",
        iconSrc: `${iconDir}/AgeRun3D.png`,
        demoSrc: "https://www.youtube.com/embed/bZ3FoEAus0U",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.alphapotato.agerun3d",
    },
    {
        title: "Crazy Trades!",
        iconSrc: `${iconDir}/CrazyTrades.png`,
        demoSrc: "https://www.youtube.com/embed/id9N43uagTQ",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.alphapotato.crazytrades",
    },
    {
        title: "Swipe to Reach",
        iconSrc: `${iconDir}/SwipeToReach.png`,
        demoSrc: "https://www.youtube.com/embed/3WptOVRq-SE",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.alphapotato.swipetoreach",
    },
    {
        title: "Cut and Drag",
        iconSrc: `${iconDir}/CutAndDrag.png`,
        demoSrc: "https://www.youtube.com/embed/pJ_ksaV2lwc",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.alphapotato.cutanddrag",
    },
    {
        title: "Combat Master 3D",
        iconSrc: `${iconDir}/CombatMaster3D.png`,
        demoSrc: "https://www.youtube.com/embed/PEgGvoIT5HI",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.alphapotato.combatmaster",
    },
    {
        title: "Invest Inc",
        iconSrc: `${iconDir}/InvestInc.png`,
        demoSrc: "https://www.youtube.com/embed/LMn7QDw0aew",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.alphapotato.investinc",
    },
    {
        title: "Stack Rush",
        iconSrc: `${iconDir}/StackRush.png`,
        demoSrc: "https://www.youtube.com/embed/cI3M484TESM",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.alphapotato.stackrush",
    },
    {
        title: "Pet Training",
        iconSrc: `${iconDir}/PetTraining.png`,
        demoSrc: "https://www.youtube.com/embed/cR19OASheGc",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.alphapotato.pettraining",
    },
    {
        title: "Dual Ski Rush",
        iconSrc: `${iconDir}/DualSkiRush.png`,
        demoSrc: "https://www.youtube.com/embed/R4gRWwRHb2U",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.alphapotato.dualskirush",
    },
    {
        title: "Ghost Hunter 3D",
        iconSrc: `${iconDir}/GhostHunter3D.png`,
        demoSrc: "https://www.youtube.com/embed/nJNGxCtTLhY",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.alphapotato.ghosthunter",
    },
    {
        title: "Ground Flow",
        iconSrc: `${iconDir}/GroundFlow.png`,
        demoSrc: "https://www.youtube.com/embed/qhKbjzJMlEg",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.alphapotato.groundflow",
    },
    {
        title: "Fine Diner",
        iconSrc: `${iconDir}/FineDiner.png`,
        demoSrc: "https://www.youtube.com/embed/ZElmIPjXxB8",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.alphapotato.finediner",
    },
    {
        title: "Human Ball",
        iconSrc: `${iconDir}/HumanBall.png`,
        demoSrc: "https://www.youtube.com/embed/oGVgbpW_4Ac",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.alphapotato.humanball",
    },
    {
        title: "Save Your Tower",
        iconSrc: `${iconDir}/SaveYourTower.png`,
        demoSrc: "https://www.youtube.com/embed/8vrb7Bj4mek",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.alphapotato.saveyourtower",
    },
    {
        title: "Blow Run",
        iconSrc: `${iconDir}/BlowRun.png`,
        demoSrc: "https://www.youtube.com/embed/hJZTc5KfEvQ",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.alphapotato.blowrun"
    },
    {
        title: "Word Powers",
        iconSrc: `${iconDir}/WordPowers.png`,
        demoSrc: "https://www.youtube.com/embed/-01fkjAm0cQ",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.alphapotato.wordpowers"
    },
    {
        title: "Bullet Time",
        iconSrc: `${iconDir}/BulletTime.png`,
        demoSrc: "https://www.youtube.com/embed/VDG5jWI8fv8",
    },
    {
        title: "Slingshot Castle",
        iconSrc: `${iconDir}/SlingshotCastle.png`,
        demoSrc: "https://www.youtube.com/embed/LibQwnkhJ7I",
    },
]