<?php

namespace App\Controller;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DashboardController extends AbstractController
{
    #[Route('/dashboard', name: 'app_user')]
    public function index(EntityManagerInterface $entityManager): JsonResponse
    {
        $user = $this->getUser()->getUserIdentifier();
        $userInfo = $entityManager
            ->getRepository(User::class)
            ->findOneBy(['email' => $user])
        ;
        return $this->json(['user' => $userInfo]);
    }
}