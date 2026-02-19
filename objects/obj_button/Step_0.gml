var _encima = position_meeting(mouse_x, mouse_y,self)
var _click = mouse_check_button(mb_left)


if(texto == "jogar")
{
		
	if(_encima and _click)
	{
		room_goto(rm_castelo)
	}
}
else if(texto == "sair")
{
	
	if(_encima and _click)
	{
		game_end()
	}
}