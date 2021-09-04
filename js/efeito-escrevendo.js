let i = 0;
        let mensagem = 'Bem-vindo(a) ao nosso Website';

        typing();

        function typing(){
            if(i < mensagem.length){
                document.getElementById('text').innerHTML += mensagem.charAt(i);
                i++;
                setTimeout(typing, 100);
            }
        }

