import pygame

pygame.init()
pygame.mixer.music.load('./python/curso-em-video/desafios/des018/musica.mp3')
pygame.mixer.music.play()
pygame.event.wait()