dias_alugado = int(input('Por quantos dias o carro foi alugado: '))
km_rodado = float(input('Quantos KM o carro rodou: '))

total = (dias_alugado * 60) + (km_rodado * 0.15)

print('O carro percorreu {}KM durate {} dias. A soma total dos valores é R${:.2f}'.format(km_rodado, dias_alugado, total))