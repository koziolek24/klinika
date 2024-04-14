<template>
    <div id="mainC">
        <div id="main-entrance">
            <p class="bigger-text">
                CENNIK USŁUG
            </p>
        </div>
        <div id="main-pos1">
            <div id="main-med">
                <h1 v-on:click="toggleMedText"> MEDYCYNA ESTETYCZNA</h1>
                <div v-if="showMedText">
                    <table>
                        <thead>
                        <tr>
                            <th>Cellular Matrix</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="cell-border">Twarz & Szyja</td>
                                <td class="cell-border">PLN 2300</td>
                            </tr>
                            <tr>
                                <td class="cell-border">Twarz & Dekolt</td>
                                <td class="cell-border">PLN 2300</td>
                            </tr>
                            <tr>
                                <td class="cell-border">Szyja & Dekolt</td>
                                <td class="cell-border">PLN 2300</td>
                            </tr>
                            <tr>
                                <td class="cell-border">Twarz & Dekolt & Szyja</td>
                                <td class="cell-border">PLN 3500</td>
                            </tr>
                            <tr>
                                <td class="cell-border">Twarz</td>
                                <td class="cell-border">PLN 1300</td>
                            </tr>
                            <tr>
                                <td class="cell-border">Szyja</td>
                                <td class="cell-border">PLN 1300</td>
                            </tr>
                            <tr>
                                <td class="cell-border">Dekolt</td>
                                <td class="cell-border">PLN 1300</td>
                            </tr>
                        </tbody>
                        <th><img src="../assetsPng/przerywnik2.png"></th>
                        <thead>
                            <tr>
                                <th>Juvederm Volite</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="cell-border">1 ampułka</td>
                                <td class="cell-border">PLN 1600</td>
                            </tr>
                            <tr>
                                <td class="cell-border">2 ampułki</td>
                                <td class="cell-border">PLN 2600</td>
                            </tr>
                            <tr>
                                <td class="cell-border">3 ampułki</td>
                                <td class="cell-border">PLN 3700</td>
                            </tr>
                            <tr>
                                <td class="cell-border">Dłonie</td>
                                <td class="cell-border">PLN 2600</td>
                            </tr>
                        </tbody>
                        <th><img src="../assetsPng/przerywnik2.png"></th>
                        <thead>
                            <tr>
                                <th>Mezoterapia</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="cell-border">Okolica oczu</td>
                                <td class="cell-border">PLN 400</td>
                            </tr>
                            <tr>
                                <td class="cell-border">Dekolt</td>
                                <td class="cell-border">PLN 700-800</td>
                            </tr>
                            <tr>
                                <td class="cell-border">Szyja</td>
                                <td class="cell-border">PLN 700-800</td>
                            </tr>
                            <tr>
                                <td class="cell-border">Twarz</td>
                                <td class="cell-border">PLN 700-800</td>
                            </tr>
                            <tr>
                                <td class="cell-border">Twarz & Szyja</td>
                                <td class="cell-border">PLN 1300-1500</td>
                            </tr>
                            <tr>
                                <td class="cell-border">Twarz & Szyja & Dekolt</td>
                                <td class="cell-border">PLN 1800-1900</td>
                            </tr>
                            <tr>
                                <td class="cell-border">Antycellulitowa</td>
                                <td class="cell-border">PLN 500/amp</td>
                            </tr>
                            <tr>
                                <td class="cell-border">Przebarwienia</td>
                                <td class="cell-border">PLN 400/amp</td>
                            </tr>
                        </tbody>
                        <th><img src="../assetsPng/przerywnik2.png"></th>
                        <thead>
                            <tr>
                                <th>Mezoterapia skóry głowy</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="cell-border">Toskanii</td>
                                <td class="cell-border">PLN 2100</td>
                            </tr>
                            <tr>
                                <td class="cell-border">Dermaheal HL</td>
                                <td class="cell-border">PLN 400</td>
                            </tr>
                        </tbody>
                        <th><img src="../assetsPng/przerywnik2.png"></th>
                        <thead>
                            <tr>
                                <th>Osocze Regeneris</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="cell-border">Twarz</td>
                                <td class="cell-border">PLN 1000</td>
                            </tr>
                            <tr>
                                <td class="cell-border">Szyja</td>
                                <td class="cell-border">PLN 1000</td>
                            </tr>
                            <tr>
                                <td class="cell-border">Dekolt</td>
                                <td class="cell-border">PLN 1000</td>
                            </tr>
                            <tr>
                                <td class="cell-border">Skóra głowy</td>
                                <td class="cell-border">PLN 1000</td>
                            </tr>
                            <tr>
                                <td class="cell-border">Twarz & Szyja</td>
                                <td class="cell-border">PLN 1700</td>
                            </tr>
                            <tr>
                                <td class="cell-border">Twarz & Szyja & Dekolt</td>
                                <td class="cell-border">PLN 2500</td>
                            </tr>
                        </tbody>
                        <th><img src="../assetsPng/przerywnik2.png"></th>
                        <thead>
                            <tr>
                                <th>Redermalizacja</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="cell-border">Dekolt</td>
                                <td class="cell-border">PLN 800-900</td>
                            </tr>
                            <tr>
                                <td class="cell-border">Szyja</td>
                                <td class="cell-border">PLN 800-900</td>
                            </tr>
                            <tr>
                                <td class="cell-border">Twarz</td>
                                <td class="cell-border">PLN 800-900</td>
                            </tr>
                        </tbody>
                        <th><img src="../assetsPng/przerywnik2.png"></th>
                        <thead>
                            <tr>
                                <th>Toksyna botulinowa - Botox</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="cell-border">Kurze łapki</td>
                                <td class="cell-border">PLN 700</td>
                            </tr>
                            <tr>
                                <td class="cell-border">Lwia zmarszczka</td>
                                <td class="cell-border">PLN 700</td>
                            </tr>
                            <tr>
                                <td class="cell-border">Poprzeczne zmarszczki czoła</td>
                                <td class="cell-border">PLN 700</td>
                            </tr>
                            <tr>
                                <td class="cell-border">Full face</td>
                                <td class="cell-border">PLN 2000</td>
                            </tr>
                            <tr>
                                <td class="cell-border">Całe czoło</td>
                                <td class="cell-border">PLN 1300</td>
                            </tr>
                            <tr>
                                <td class="cell-border">Nadpotliwość</td>
                                <td class="cell-border">PLN 2000</td>
                            </tr>
                        </tbody>
                        <th><img src="../assetsPng/przerywnik2.png"></th>
                        <thead>
                            <tr>
                                <th>Wolumetria</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="cell-border">7-9 punktowy lifting twarzy</td>
                                <td class="cell-border">PLN 6500</td>
                            </tr>
                            <tr>
                                <td class="cell-border">1 ampułka</td>
                                <td class="cell-border">PLN 1600</td>
                            </tr>
                            <tr>
                                <td class="cell-border">kolejna ampułka</td>
                                <td class="cell-border">PLN 1200</td>
                            </tr>
                        </tbody>
                        <th><img src="../assetsPng/przerywnik2.png"></th>
                        <thead>
                            <tr>
                                <th>Bioremodeling Prophilo</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="cell-border">1 ampułka</td>
                                <td class="cell-border">PLN 1500</td>
                            </tr>
                            <tr>
                                <td class="cell-border">2 ampułki</td>
                                <td class="cell-border">PLN 2500</td>
                            </tr>
                        </tbody>
                        <th><img src="../assetsPng/przerywnik2.png"></th>
                        <thead>
                            <tr>
                                <th>Pozostałe usługi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="cell-border">HArmoniCA - biostymulator</td>
                                <td class="cell-border">PLN 3500</td>
                            </tr>
                            <tr>
                                <td class="cell-border">Dolina łez</td>
                                <td class="cell-border">PLN 1500</td>
                            </tr>
                            <tr>
                                <td class="cell-border">Modelowanie ust</td>
                                <td class="cell-border">PLN od 1200</td>
                            </tr>
                            <tr>
                                <td class="cell-border">Nawilżenie ust</td>
                                <td class="cell-border">PLN 1000</td>
                            </tr>
                            <tr>
                                <td class="cell-border">Nucleofill Eyes</td>
                                <td class="cell-border">PLN 1100</td>
                            </tr>
                            <tr>
                                <td class="cell-border">Miomodulacja</td>
                                <td class="cell-border">do ustalenia</td>
                            </tr>
                        </tbody>
                        <th><img src="../assetsPng/przerywnik2.png"></th>
                        <thead>
                            <tr>
                                <th>Konsultacje</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="cell-border">Medycyna estetyczna</td>
                                <td class="cell-border">PLN 300</td>
                            </tr>
                            <tr>
                                <td class="cell-border">Hialuronidaza-leczenie powikłań powstałych w innych salonach</td>
                                <td class="cell-border">PLN od 2500</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div v-if="showMedText">
                </div>
            </div>
            <img src="../assetsPng/przerywnik3.png">
            <div id="main-kos">
                <h1 v-on:click="toggleKosText">KOSMETOLOGIA</h1>
                <div v-if="showKosText">
                    <table>
                        <thead>
                            <tr>
                                <th>Retinal Infusion Peel Osmosis</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="cell-border">Retinal Infusion Peel Osmosis</td>
                                <td class="cell-border"> PLN 850</td>
                            </tr>
                        </tbody>
                        <th><img src="../assetsPng/przerywnik2.png"></th>
                        <thead>
                            <tr>
                                <th>Mezoterapia mikroigłowa</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="cell-border">Twarz</td>
                                <td class="cell-border">PLN 550</td>
                            </tr>
                            <tr>
                                <td class="cell-border">Twarz & Szyja</td>
                                <td class="cell-border">PLN 750</td>
                            </tr>
                            <tr>
                                <td class="cell-border">Twarz & Szyja & Dekolt</td>
                                <td class="cell-border">PLN 900</td>
                            </tr>
                        </tbody>
                        <th><img src="../assetsPng/przerywnik2.png"></th>
                        <thead>
                            <tr>
                                <th>Mezoterapia mikroigłowa z czynnikami wzrostu</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="cell-border">Twarz</td>
                                <td class="cell-border">PLN 1200</td>
                            </tr>
                            <tr>
                                <td class="cell-border">Twarz & Szyja</td>
                                <td class="cell-border">PLN 1500</td>
                            </tr>
                            <tr>
                                <td class="cell-border">Twarz & Szyja & Dekolt</td>
                                <td class="cell-border">PLN 1800</td>
                            </tr>
                        </tbody>
                        <th><img src="../assetsPng/przerywnik2.png"></th>
                        <thead>
                            <tr>
                                <th>Peelingi chemiczne</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="cell-border">Twarz</td>
                                <td class="cell-border">PLN 350</td>
                            </tr>
                            <tr>
                                <td class="cell-border">Twarz & Szyja</td>
                                <td class="cell-border">PLN 400</td>
                            </tr>
                            <tr>
                                <td class="cell-border">Twarz & Szyja & Dekolt</td>
                                <td class="cell-border">PLN 450</td>
                            </tr>
                        </tbody>
                        <th><img src="../assetsPng/przerywnik2.png"></th>
                        <thead>
                            <tr>
                                <th>Laminacja</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="cell-border">Laminacja brwi z architekturą, farbką i regulacją</td>
                                <td class="cell-border">PLN 170</td>
                            </tr>
                            <tr>
                                <td class="cell-border">Laminacja brwi</td>
                                <td class="cell-border">PLN 100</td>
                            </tr>
                            <tr>
                                <td class="cell-border">Regulacja brwi</td>
                                <td class="cell-border">PLN 30</td>
                            </tr>
                            <tr>
                                <td class="cell-border">Farbowanie i regulacja brwi</td>
                                <td class="cell-border">PLN 80</td>
                            </tr>
                        </tbody>
                        <th><img src="../assetsPng/przerywnik2.png"></th>
                        <thead>
                            <tr>
                                <th>Wosk</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="cell-border">Wąsik</td>
                                <td class="cell-border">PLN 30</td>
                            </tr>
                            <tr>
                                <td class="cell-border">Pachy</td>
                                <td class="cell-border">PLN 80</td>
                            </tr>
                            <tr>
                                <td class="cell-border">Ręce</td>
                                <td class="cell-border">PLN 85</td>
                            </tr>
                            <tr>
                                <td class="cell-border">Łydki/Uda</td>
                                <td class="cell-border">PLN 90</td>
                            </tr>
                            <tr>
                                <td class="cell-border">Całe nogi</td>
                                <td class="cell-border">PLN 160</td>
                            </tr>
                            <tr>
                                <td class="cell-border">Bikini klasyczne</td>
                                <td class="cell-border">PLN 90</td>
                            </tr>
                            <tr>
                                <td class="cell-border">Bikini głębokie</td>
                                <td class="cell-border">PLN 150</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div v-if="showKosText">
                </div>
            </div>
        </div>
        <br>
        <br>
        <br>
    </div>
</template>
<script>
export default {
    data() {
        return {
            showMedText: false,
            showKosText: false,
        };
    },
    methods: {
        toggleMedText() {
            this.showMedText = !this.showMedText;
        },
        toggleKosText() {
            this.showKosText = !this.showKosText;
        }
    }
}
</script>


<style lang="scss" scoped>
@import '../styles/style.scss';
    *{
    text-decoration: none;
    }
    h1{
        text-align: center;
        cursor: pointer;
    }
#mainC
{

    height: 100%;
    min-height: 80vh;
    #main-entrance
    {
        color: #BD924A;
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: space-around;
    }
    #main-pos1
    {
        color: #BD924A;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        #main-med{
            table {
                justify-content: space-between;
                display: flex;
                flex-direction: column;
                align-items: center;
                th {
                    text-align: center;
                }
            }
        }
        #main-kos{
            table{
                justify-content: space-between;
                display: flex;
                flex-direction: column;
                align-items: center;
                th {
                    text-align: center;
                }
            }
        }

    }

}
.bigger-text
{
    font-size: 4em;
}
.big-text
{
    font-size: 3em;
}
.cell-border {
    padding: 10px 30px;
  }

</style>