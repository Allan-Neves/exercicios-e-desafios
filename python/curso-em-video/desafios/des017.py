from random import shuffle

alu1 = str(input('Digite o primeiro aluno: '))
alu2 = str(input('Digite o segundo aluno: '))
alu3 = str(input('Digite o terceiro aluno: '))
alu4 = str(input('Digite o quarto aluno: '))

turma = [alu1, alu2, alu3, alu4]
shuffle(turma)

print('A ordem de apresentação do trabalho será: \n{}'.format(turma))