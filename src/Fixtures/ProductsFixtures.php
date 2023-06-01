<?php

namespace App\Fixtures;
use App\Entity\Product;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;


class ProductsFixtures extends Fixture
{

    public function load(ObjectManager $manager)
    {
        for ($i = 1; $i < 9; $i++) {
            $product = new Product();
            $product->setTitle('product '.$i);
            $product->setPrice(mt_rand(10, 100));
            $manager->persist($product);
        }
        $manager->flush();
    }
}