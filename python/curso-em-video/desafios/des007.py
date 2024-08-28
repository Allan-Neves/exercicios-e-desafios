dinheiro = float(input('Digite quanto dinheiro você tem na carteira R$: '))

dolar = dinheiro / 5.55
euro = dinheiro / 6.19
iene = dinheiro / 0.038
libra = dinheiro / 7.34

print('Com R${} você pode comprar: \n US${:.2f}. \n €{:.2f}. \n ¥{:.2f}. \n £{:.2f}.'.format(dinheiro, dolar, euro, iene, libra))