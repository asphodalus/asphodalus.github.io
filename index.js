	var id = ["Airi_home", "Akane_home", "akari_bg", "akari_home", "akari_scene", "Ako_home", "Aris_home", "Aru_home", "Aru_newyear_home", "Aru_scene", "Asuna_home", "Atsuko_home", "Ayane_home", "Azusa_home", "Azusa_swimsuit_home", "CH0058_home", "CH0060BG_home", "CH0060_home", "CH0063_home", "CH0064_home", "CH0066_home", "CH0069_home", "CH0071_home", "CH0079_home", "CH0081_home", "CH0086_home", "CH0087_home", "CH0088_home", "CH0089_home", "CH0092_home", "CH0095_home", "CH0098_home", "CH0099_home", "CH0100_home", "CH0101_home", "CH0107_home", "CH0110_home", "CH0113_home", "CH0114_home", "CH0123_home", "CH0124_home", "CH0135_home", "CH0137_home", "CH0138_home", "CH0141_home", "CH0144_home", "CH0145_home", "CH0152_home", "CH0155_home", "CH0156_home", "CH0159_home", "CH0160_home", "CH0161_home", "CH0163_home", "CH0164_home", "CH0165_home", "CH0167_home", "CH0169_home", "CH0170_home", "CH0175_home", "CH0176_home", "CH0177_home", "CH0178_home", "CH0179_home", "CH0180_home", "CH0181_home", "CH0182_home", "CH0183_home", "CH0184_00", "CH0184_home", "CH0185_home", "CH0186_home", "CH0187_home", "CH0188_home", "CH0189_home", "CH0190_home", "CH0191_home", "CH0192_home", "CH0193_home", "CH0194_home", "CH0195_home", "CH0196_home", "CH0198_home", "CH0200_home", "CH0201_home", "CH0202_home", "CH0203_home", "CH0204_home", "CH0205_home", "CH0209_home", "CH0210_home", "CH0211_home", "CH0214_home", "CH0215_home", "CH0216_home", "CH0217_home", "CH0218_home", "CH0219_home", "CH0220_home", "CH0224_home", "CH0225_home", "CH0230_home", "CH0231_home", "CH0232_home", "CH0233_home", "CH0239_home", "CH0240_home", "CH0250_home", "CH0251_home", "CH0255_home", "CH0258_home", "CH0260_home", "CH0261_home", "CH0262_home", "CH0263_home", "CH0266_home", "CH0267_home", "CH0269_home", "CH0270_home", "CH0271_home", "CH9996_home", "CH9997_home", "CH9998_home", "CH9999_home", "Cherino_home", "Chinatsu_home", "Chise_home", "Eimi_home", "Fuuka_home", "Fuuka_Scene", "Hanae_home", "Hanako_home", "Hare_home", "Haruka_home", "Haruna_home", "Hasumi_home", "Hibiki_home", "Hihumi_home", "Hinata_home", "Hina_home", "Hiyori_home", "Hoshino_home", "Hoshino_home_background", "Hoshino_swimsuit_home", "Ibuki_home", "Iori_home", "Izumi_home", "Izumi_swimsuit_home", "Izuna_home", "juri_home", "Kaede_home", "Karin_home", "Kayoko_home", "kazusa_home", "Kirara_home", "kirino_home", "Koharu_home", "Kotama_home", "Kotori_home", "Maki_home", "Marina_home", "mari_home", "Mashiro_home", "Mashiro_swimsuit_home", "Midori_home", "Mimori_home", "Misaki_home", "Miyako_home", "Moe_home", "momiji_home", "Momoi_home", "Momoi_Scene", "Mutsuki_home", "mutsuki_newyear_home", "Nagisa_home", "Neru_home", "Nodoka_home", "Nonomi_home", "Pina_home", "Sakurako_home", "Saori_home", "Saya_casual_home", "Saya_home", "Serika_home", "Serika_Newyear_home", "serina_home", "Shigure_00", "Shigure_01", "Shigure_home", "Shimiko_home", "Shiroko_home", "Shiroko_ridingsuit_home", "Shizuko_home", "Shun_home", "Sumire_home", "Suzumi_home", "Tomoe_home", "Tsubaki_home", "Tsurugi_home", "Utaha_home", "Wakamo_home", "Wakamo_Scene_0", "Yoshimi_home", "Yuuka_home", "yuzu_bg", "Yuzu_home", "Zunko_home"]
	var select = document.querySelector("select")
	var ih = "";
	for (x in id) {
		ih+=`<option value="${id[x]}">${id[x]}</option>`
	}

	select.innerHTML = ih;

    function handleClick(event){
        console.log(event)
        const dropdown = document.querySelector("#dropdown")
        if (event.key == "x") { 
            dropdown.style.display = "none"
            
        }
        else {
            dropdown.style.display = "flex"
        }
    }