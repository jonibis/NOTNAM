//se desenhando
draw_self()


//Desenhar o texto
draw_set_halign(1)
draw_set_valign(1)
draw_set_colour(c_black)
draw_set_font(ft_menu)


draw_text(x + sprite_width / 2, y + sprite_height / 2, texto)


draw_set_font  (-1)
draw_set_halign(-1)
draw_set_halign(-1)
draw_set_colour(-1)