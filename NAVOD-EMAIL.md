# Nastavení odesílání e-mailů z rezervačního formuláře (Web3Forms)

Poptávkový formulář na `rezervace.html` odesílá e-maily přes bezplatnou službu
[Web3Forms](https://web3forms.com) místo dříve používaného FormSubmit, který
nefungoval spolehlivě (vyžadoval aktivaci a odesílání se často nepodařilo).

## Jak získat Access Key

1. Otevřete https://web3forms.com
2. Do pole zadejte e-mail, na který mají poptávky chodit (např. `f.motycka@seznam.cz`)
3. Klikněte na **Create Access Key** – klíč přijde ihned na zadaný e-mail (žádná
   další aktivace ani registrace není potřeba)
4. Zkopírujte vygenerovaný Access Key (vypadá např. jako `a1b2c3d4-e5f6-...`)

## Kam klíč vložit

V souboru `rezervace.html` najděte formulář `<form id="resForm" ...>` a do
atributu `data-access-key` vložte získaný klíč:

```html
data-access-key="VLOŽTE-SEM-VÁŠ-KLÍČ"
```

Pokud se zároveň změní e-mail, na který mají poptávky chodit, upravte i
atribut `data-owner-email` – Web3Forms posílá poptávky na e-mail nastavený
při vytvoření klíče, `data-owner-email` v aplikaci slouží i jako doplňková
informace v odesílaných datech.

## Poznámka k záložnímu / hlavnímu režimu

- Je-li `data-api-url` vyplněná (napojení na Google Apps Script podle
  `NAVOD-REZERVACE.md`), poptávky jdou přes tento backend a Web3Forms se
  nepoužije.
- Je-li `data-api-url` prázdná, formulář se odesílá přímo přes Web3Forms
  podle nastavení výše.
