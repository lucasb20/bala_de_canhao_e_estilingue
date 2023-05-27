# bala_de_canhao_e_estilingue
Um jogo interessante.

Produzido por Lucas Rocha.

Ideia do jogo foi retirada do livro "O guia essêncial de HTML5" de Jeanine Meyer.

Há uma bola inicialmente parada, você digita uma velocidade e um angulo entre 0 e 90 em graus.

É simulado uma gravidade, a bola perde velocidade vertical conforme o tempo passa.

A bola ricocheteia na parede e perde um pouco de velocidade.

Infelizmente não consegui imaginar um jeito para a bola perder totalmente o movimento após muito tempo rolando.

No máximo pensei em uma ideia usando uma decadência exponencial e, após um certa velocidade vertical, uma decadência linear.

Certas coisas do livro não foi possível aplicar aqui:

O canhão que lançaria a bola não poderia ser rotacionado, a solução do livro para isso não funciona.

A ideia do estilingue não funciona por conta do mesmo problema citado acima.

Canvas em si funciona de um jeito bem estranho.
