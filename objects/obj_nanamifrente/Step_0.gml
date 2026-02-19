var _esq   = keyboard_check(vk_left);
var _dir   = keyboard_check(vk_right);
var _cima  = keyboard_check(vk_up);
var _baixo = keyboard_check(vk_down);

velh = (_dir - _esq) * vel;
velv = (_baixo - _cima) * vel;


if(place_meeting(x+velh, y,obj_wall)){
	while(!place_meeting(x+sign(velh),y, obj_wall))
	x = x + sign(velh)
	}

x += velh;
y += velv;

// define lado
if (_dir)   lado = 1;
if (_esq)   lado = 2;
if (_cima)  lado = 3;
if (_baixo) lado = 0;

// define sprite
switch (lado) {
    case 0: sprite_index = spr_frente; break;
    case 1: sprite_index = spr_dir;    break;
    case 2: sprite_index = spr_esq;    break;
	case 3: sprite_index = spr_cima;   break;
}




// Limite horizontal (X)
x = clamp(x, 10, room_width - bbox_right + bbox_left);
 
// Limite vertical (Y)
y = clamp(y, bbox_top, 676)
