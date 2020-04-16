'use strict'

const ConvertDoc2Pdf = require('./Word2Pdf')


console.log('Convertendo arquivo!')

let convert = new ConvertDoc2Pdf()

convert.handler('CCB_Preenchida.docx', 'CCB_Preenchida.pdf')

