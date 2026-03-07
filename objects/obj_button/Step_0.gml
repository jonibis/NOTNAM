var _encima = position_meeting(mouse_x, mouse_y,self)
var _click = mouse_check_button_pressed(mb_left)


// efeito quando passa o mouse
if(_encima)
{
	image_xscale = 1.1
	image_yscale = 1.1
}
else
{
	image_xscale = 1
	image_yscale = 1
}


if(texto == "jogar")
{
	if(_encima and _click)
	{
		var t = instance_create_depth(0, 0, -1000, obj_transicao)
        t.proxima_room = rm_castelo
	}
}
else if(texto == "sair")
{
	if(_encima and _click)
	{
		var t = instance_create_depth(0,0,-1000,obj_transicao)
        t.fechar_jogo = true
	}
}