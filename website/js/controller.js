$('.top.menu .item').tab();
$('select.dropdown').dropdown();
$('.ui.form')
.form({
  fields: {
    title: {
      identifier: 'titel',
      rules: [
        {
          type   : 'empty',
          prompt : 'Bitte geben Sie ihrem Anliegen einen Titel.'
        }
      ]
    },
    kategorie: {
      identifier: 'kategorie',
      rules: [
        {
          type   : 'minCount[1]',
          prompt : 'Bitte wählen Sie mindestens eine Kategorie für Ihr Anliegen.'
        }
      ]
    },
    beschreibung: {
      identifier: 'beschreibung',
      rules: [
        {
          type   : 'empty',
          prompt : 'Bitte geben Sie eine kurze Beschreibung an.'
        },
        {
          type   : 'minLength[20]',
          prompt : 'Bitte formulieren Sie die Beschreibung noch etwas aus.',
//          prompt : 'Your password must be at least {ruleValue} characters'
        }
      ]
    },
    terms: {
      identifier: 'terms',
      rules: [
        {
          type   : 'checked',
          prompt : 'Bitte bestätigen Sie, dass alle angegebenen Information der Wahrheit entsprechen.'
        }
      ]
    }
  }
})
;