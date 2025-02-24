        function calcularTempoNoAr() {
            // Data e hora em que o blog foi colocado no ar
            const dataLancamento = new Date('2025-02-18T20:00:00-03:00');
            
            // Data e hora atuais
            const dataAtual = new Date();
            
            // Diferença em milissegundos
            const diferenca = dataAtual - dataLancamento;
            
            // Calculando os dias e horas
            const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
            const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            
            // Exibindo o resultado
            document.getElementById('tempo-no-ar').innerHTML = `${dias} dias e ${horas} horas`;
        }

        // Atualizar o tempo no ar a cada hora
        setInterval(calcularTempoNoAr, 3600000);

        // Chamar a função imediatamente para exibir o tempo no ar
        calcularTempoNoAr();
