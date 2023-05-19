<?php

namespace App\Controller;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DashboardController extends AbstractController
{
    #[Route('/user/dashboard', name: 'app_user')]
    public function index(EntityManagerInterface $entityManager): Response
    {
        $user = $this->getUser()->getUserIdentifier();

        $userInfo = $entityManager
            ->getRepository(User::class)
            ->findOneBy(['email' => $user])
        ;

        return $this->render('DashboardPage/dashboard.html.twig',
        [
            'user' => $userInfo
        ]);
    }
}