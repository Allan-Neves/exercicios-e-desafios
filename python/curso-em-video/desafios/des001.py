inc = input("Digite algo: ")

print('Aqui estão os dados do seu input: \n'
      f'Tipo primitivo: {type(inc)} \n'
      f'Ele é um número: {inc.isnumeric()} \n'
      f'Ele é uma letra: {inc.isalpha()} \n'
      f'Ele é alfanumérico: {inc.isalnum()} \n'
      f'Ele é um caractere ASCII: {inc.isascii()} \n'
      f'Ele é um decimal: {inc.isdecimal()} \n'
      f'Ele é um digito: {inc.isdigit()} \n'
      f'Ele é um identificado Python válido: {inc.isidentifier()} \n'
      f'Ele está escrito em letra minúscula: {inc.islower()} \n'
      f'Ele está escrito em letra maiúscula: {inc.isupper()} \n'
      f'Ele é imprimivel: {inc.isprintable()} \n'
      f'Ele é um espaço em branco: {inc.isspace()} \n'
      f'Ele é um título: {inc.istitle()}'
)