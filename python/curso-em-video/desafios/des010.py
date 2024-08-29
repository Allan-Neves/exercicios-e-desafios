salario = float(input('Digite o salário do funcionário (R$):'))
percentual = float(input('Digite a porcentagem de aumento que ele(a) receberá:'))

aumento = salario + (salario * percentual / 100)

print('O salário que antes era de R${:.2f}, agora com {}% de aumento passará a ser R${:.2f}'.format(salario, percentual, aumento))