import math

cateto_oposto = float(input('Digite o comprimento do cateto oposto: '))
cateto_adjacente = float(input('Digite o comprimento do cateto adjacente: '))
# hipotenusa = (cateto_oposto ** 2 + cateto_adjacente ** 2) ** (1/2)
hipotenusa = math.hypot(cateto_oposto, cateto_adjacente)

print('A hipotenusa vai medir {:.2f}'.format(hipotenusa))