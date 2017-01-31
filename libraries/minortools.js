//Platform Logo's
function PlatformLogo(platformnaam)
{
    platformnaam = platformnaam.toUpperCase();
    switch (platformnaam)
    {
        default:
            return platformnaam;

        //platforms - spelcomputers
        case "PS1":
            return "<img src='/resources/images/icons/ps1.png' class='hasTooltip' />";
        case "PS3":
            return "<img src='/resources/images/icons/ps3.png' class='hasTooltip' />";
        case "PS2":
            return "<img src='/resources/images/icons/ps2.png' class='hasTooltip' />";
        case "PS4":
            return "<img src='/resources/images/icons/ps4.png' class='hasTooltip' />";
        case "PC":
            return "<img src='/resources/images/icons/windows.png' class='hasTooltip' />";
        case "XBOX ONE":
            return "<img src='/resources/images/icons/xboxone.png' class='hasTooltip' />";
        case "NES":
            return "<img src='/resources/images/icons/nes.png' class='hasTooltip' />";
        case "N64":
            return "<img src='/resources/images/icons/n64.png' class='hasTooltip' />";
        case "NINTENDO SWITCH":
            return "<img src='/resources/images/icons/switch.png' class='hasTooltip' />";
        case "NINTENDO WII":
            return "<img src='/resources/images/icons/wii.png' class='hasTooltip' />";
        case "NINTENDO WII U":
            return "<img src='/resources/images/icons/wiiu.png' class='hasTooltip' />";
        case "NGC":
            return "<img src='/resources/images/icons/ngc.png' class='hasTooltip' />";
        case "GAME BOY":
            return "<img src='/resources/images/icons/gameboy.png' class='hasTooltip' />";
        case "NINTENDO DS":
            return "<img src='/resources/images/icons/nintendods.png' class='hasTooltip' />";
        case "GBA":
            return "<img src='/resources/images/icons/gba.png' class='hasTooltip' />";
        case "PSP":
            return "<img src='/resources/images/icons/psp.png' class='hasTooltip' />";
        case "NINTENDO 3DS":
            return "<img src='/resources/images/icons/nintendo3ds.png' class='hasTooltip' />";

        //publishers - uitgevers
        case "NINTENDO":
            return "<img src='/resources/images/publishers/nintendo.png' class='hasTooltip' />";
        case "UBISOFT":
            return "<img src='/resources/images/publishers/ubisoft.png' class='hasTooltip' />";
        case "ELECTRONIC ARTS":
            return "<img src='/resources/images/publishers/ea.png' class='hasTooltip' />";
        case "SONY":
            return "<img src='/resources/images/publishers/sony.png' class='hasTooltip' />";
        case "ROCKSTAR":
            return "<img src='/resources/images/publishers/rockstar.png' class='hasTooltip' />";
        case "SEGA":
            return "<img src='/resources/images/publishers/sega.png' class='hasTooltip' />";
        case "KONAMI":
            return "<img src='/resources/images/publishers/konami.png' class='hasTooltip' />";
        case "ATLUS":
            return "<img src='/resources/images/publishers/atlus.png' class='hasTooltip' />";
        case "ACTIVISION":
            return "<img src='/resources/images/publishers/activision.jpg' class='hasTooltip' />";
    }
}

function BeschikbaarheidKleur(stockvalue){
    
        if (stockvalue<=0) {
            return "<img src='/resources/images/availability/buttonred.png' />";
        } else if (stockvalue>=1) {
            return "<img src='/resources/images/availability/buttongreen.png' />";
        } else {
            return stockvalue
        }
}