module.exports = {

  prompts: false,

  templateData: {

    // configurazione
    conf: {
      name: "Proloco Trezzo sull'Adda",
      description: "Sito ufficiale della Proloco di Trezzo sull'Adda",
    },

    // informazioni sito
    site: {
      theme: "yellow-swan",
      url: "http://braziljs.github.io/conf-boilerplate/",
      googleanalytics: ""
    },

    // sezioni del sito
    sections: [
      'eventi',
      'visiteguidate',
      'agevolazioni',
      //'storia',
      'tesseramento',
      'chisiamo',
      'contatti'
    ],

    // etichette sezioni
    labels: {
      eventi: "Eventi",
      visiteguidate: "Visite Guidate",
      agevolazioni: "Agevolazioni",
      //storia: "Storia",
      tesseramento: "Tesseramento",
      chisiamo: "Chi Siamo",
      contatti: "Contatti"
    },
    
    // tipologie di visite
    visite: [
      {
        cosa: 'Il Castello Visconteo',
        orari: 'Partenza ore 15.00 e 17.00',
        durata: '1 ora e mezza',
        quando: 'Ogni domenica pomeriggio e festivi, senza prenotazione',
        periodo: 'Marzo - Ottobre',
        prezzo: 'Intero: €6,00 - Ridotto (6-12 anni): €3,00 - Gratuito sotto i 6 anni',
        descrizione: 'La visita comprende la ricostruzione della tomba longobarda, i sotterranei, i resti del ponte e la salita alla torre.',
        gruppi: 'Visite guidate per gruppi e scolaresche (max 25 persone), su prenotazione tutto l’anno, anche in notturna',
        prezzogruppi: 'Adulti: €60,00 Scolaresche e Over 65: €45,00' 
      },
      {
        cosa: 'La Centrale Idroelettrica Taccani',
        quando: 'Su prenotazione Martedì, Mercoledì e Giovedì, senza prenotazione in occasione di aperture straordinarie della Centrale per eventi e manifestazioni.',
        prezzo: 'Visita gratuita offerta da ENEL',
        
      },
      {
        cosa: 'Il nostro Territorio',
        quando: 'Tutto l\'anno su prenotazione per gruppi',
        descrizione: 'Visite guidate al territorio (promontorio di Trezzo, centro storico, Crespi d’Adda)'
      }
      
    ],
    
    // lista degli eventi
    eventi: [
      {
        data: '31/10/2013',
        ora: '20:30 - 00:30',
        cosa: 'Halloween al Castello',
        dove: 'Castello Visconteo, Trezzo Sull\'Adda, MI', 
        descrizione: 'Si avvicina la Notte più paurosa dell\'Anno e Pro Loco ha in serbo per Voi una serata da Brivido tra i Rudeli Vistonei! Oserete Voi sfidare gli spiriti che infestano il Castello?',
        immagine: '2013-halloween.jpg'
      }
    ],

    // agevolazioni
    agevolazioni: [
      {
        data: '29 e 30 Ottobre',
        ora: '20:30',
        cosa: 'Otello di Giuseppe Verdi',
        dove: 'Teatro degli Arcimboldi Milano',
        descrizione: 'Grazie alla convenzione con i teatri Arcimboldi e Dal Verme, la Pro Loco Trezzo offre ai propri soci la possibilità di andare a teatro a prezzo scontato, previa presentazione all\'ingresso della tessera associativa.',
        immagine: '2013-otello.jpg'
      }
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    }
  }
};