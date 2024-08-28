alt = float(input('Digite a altura da parede: '))
larg = float(input('Digite a largura da parede: '))

area = alt * larg
tinta = area / 2

print('Sua parede tem a dimensão de {}x{}, e a sua área é de {}m². Para pintar esta parede, você precisará de {}L de tinta.'.format(alt, larg, area, tinta))