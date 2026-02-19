//Checando alvo
if(instance_exists(obj_nanamifrente))
{
	alvo = obj_nanamifrente
}

// seguir nanami

x = lerp(x, alvo.x, 0.1)
y = lerp(y, alvo.y, 0.1)


// alterando posicao

camera_set_view_pos(view_camera[0], x, y)

