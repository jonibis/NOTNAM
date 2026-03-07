if(estado == "fade_out"){
    alpha += fade_speed
    
    if(alpha >=1){
        
        alpha = 1
        
        if (proxima_room != noone) {
            
            room_goto(proxima_room)
        }
        
        if (fechar_jogo) {
        	game_end()
        }
        
        estado = "fade_in"
    }
}
else if(estado == "fade_in"){
    
    alpha -= fade_speed
    
    if (alpha <= 0) {
    
        alpha = 0
        instance_destroy()	
    }
}