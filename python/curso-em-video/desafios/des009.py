preco = float(input('Digite o preço (R$) do produto que deseja aplicar o desconto:'))
percentual = float(input('Digite a porcentagem de desconto:'))

desconto = preco - (preco * percentual / 100)

print('O preço com um desconto de {}% é igual a: R${:.2f}'.format(percentual, desconto))