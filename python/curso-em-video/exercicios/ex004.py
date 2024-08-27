# Operações aritmeticas
# +
# -
# *
# /
# %
# **
# //

# nome = input('Digite o seu nome: ')
# print('Prazer em te conhecer, {:=^20}!'.format(nome))
n1 = int(input("Digite um número: "))
n2 = int(input("Digite outro número: "))

s = n1 + n2
sub = n1 - n2
m = n1* n2
d = n1 / n2
mod = n1 % n2
expo = n1 ** n2
divI = n1 // n2

print(
    f'A soma dos valores é {s} \n'
    f'A subtração dos valores é {sub} \n'
    f'A multiplicação dos valores é {m} \n'
    f'A divisão dos valores é {d} \n'
    f'O resto da divisão dos valores é {mod} \n'
    f'A exponenciação dos valores é {expo} \n'
    f'A divisão inteira dos valores é {divI} \n'
)
