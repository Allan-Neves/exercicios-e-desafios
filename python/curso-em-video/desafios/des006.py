distancia = float(input('Digite uma distância em metros: '))

km = distancia / 1000
hm = distancia / 100
dam = distancia / 10
cm = distancia * 100
mm = distancia * 1000

print('A medida de {} metros corresponde a:'.format(distancia))
print(
    f'{km:.4f}KM \n'
    f'{hm:.3f}HM \n'
    f'{dam:.2f}DAM \n'
    f'{cm:.0f}CM \n'
    f'{mm:.0f}MM \n'
)