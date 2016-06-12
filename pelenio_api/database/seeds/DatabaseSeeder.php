<?php

use Illuminate\Database\Seeder;
use App\User;
use App\Contato;
use Illuminate\Database\Eloquent\Model;
use App\Operadora;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $operadoras = array(
            ['nome' => 'Oi',     'codigo' => '21', 'categoria' => 'celular'],
            ['nome' => 'Vivo',   'codigo' => '15', 'categoria' => 'celular'],
            ['nome' => 'Tim',    'codigo' => '05', 'categoria' => 'celular'],
            ['nome' => 'Claro',  'codigo' => '31', 'categoria' => 'celular'],
            ['nome' => 'Vivo',   'codigo' => '15', 'categoria' => 'celular'],
            ['nome' => 'Net',    'codigo' => '00', 'categoria' => 'fixo'],
            ['nome' => 'Gvt',    'codigo' => '00', 'categoria' => 'fixo'],

        );



        foreach ($operadoras as $operadora)

        {
            Operadora::create($operadora);
        }

        /*
        $contatos = array(
            ['nome' => 'Ryan_Chenkie',   'telefone' => '3363-2795'],
            ['nome' => 'Chris_Sevilleja','telefone' => '4531-4135'],
            ['nome' => 'Holly_Lloyd',    'telefone' => '3698-6522'],
            ['nome' => 'Adnan_Kukic',    'telefone' => '6655-9987'],
        );

        foreach ($contatos as $contato)
        {
            Contato::create($contato);
        }
        */
        // $this->call(UsersTableSeeder::class);
        /*
		$users = array(
                ['name' => 'Ryan Chenkie', 'email' => 'ryanchenkie@gmail.com', 'password' => Hash::make('secret')],
                ['name' => 'Chris Sevilleja', 'email' => 'chris@scotch.io', 'password' => Hash::make('secret')],
                ['name' => 'Holly Lloyd', 'email' => 'holly@scotch.io', 'password' => Hash::make('secret')],
                ['name' => 'Adnan Kukic', 'email' => 'adnan@scotch.io', 'password' => Hash::make('secret')],
        );
            
        // Loop through each user above and create the record for them in the database
        foreach ($users as $user)
        {
            User::create($user);
        }
        */

        Model::reguard();        
    }
}
