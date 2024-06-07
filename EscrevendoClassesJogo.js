// Definindo a classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'realizou um ataque';
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Criando instâncias da classe Heroi
const hero1 = new Heroi('Kratos', 30, 'guerreiro');
const hero2 = new Heroi('Dumbledore', 1000, 'mago');
const hero3 = new Heroi('Dalai Lama', 32, 'monge');
const hero4 = new Heroi('Mochizuki Chiyome', 25, 'ninja');

// Chamando o método atacar para cada herói
hero1.atacar();
hero2.atacar();
hero3.atacar();
hero4.atacar();