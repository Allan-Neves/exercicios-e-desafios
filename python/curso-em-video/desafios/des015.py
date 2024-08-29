from math import sin, cos, tan, radians

angulo = float(input('Digite um ângulo: '))

seno = sin(radians(angulo))
cosseno = cos(radians(angulo))
tangente = tan(radians(angulo))

print('O ângulo de {} tem: \nSENO de {:.2f}. \nCOSSENO de {:.2f}. \nTANGENTE de {:.2f}'.format(angulo, seno, cosseno, tangente))