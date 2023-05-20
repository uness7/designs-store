<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\RegistrationFormType;
use App\Repository\UserRepository;
use App\Security\EmailVerifier;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mime\Address;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;
use SymfonyCasts\Bundle\VerifyEmail\Exception\VerifyEmailExceptionInterface;

class RegistrationController extends AbstractController {
//    private EmailVerifier $emailVerifier;
//
//    public function __construct(EmailVerifier $emailVerifier)
//    {
//        $this->emailVerifier = $emailVerifier;
//    }

    #[Route('/api/signup', name: 'app_register')]
    public function register(
        Request $request,
        UserPasswordHasherInterface $userPasswordHasher,
        EntityManagerInterface $entityManager
    ): JsonResponse
    {
        $user = new User();
        $form = $this->createForm(RegistrationFormType::class, $user);
        $form->handleRequest($request);

        $firstName = $form->get('firstName')->getData();
        $lastName = $form->get('lastName')->getData();
        $email = $form->get('email')->getData();
        $addressOne = $form->get('addressLineOne')->getData();
        $city = $form->get('city')->getData();
        $country = $form->get('country')->getData();
        $phoneNumber = $form->get('phoneNumber')->getData();

        if ($form->isSubmitted() && $form->isValid()) {

            $user->setFirstName($firstName);
            $user->setLastName($lastName);
            $user->setAddressLineOne($addressOne);
            $user->setEmail($email);
            $user->setCity($city);
            $user->setCountry($country);
            $user->setPhoneNumber($phoneNumber);
            $user->setCreatedAt(new \DateTimeImmutable());
            $user->setUpdatedAt(new \DateTimeImmutable());
            $user->setRoles('ROLE_USER');

            if(!empty($form->get('addressLineTwo')->getData())) {
                $user->setAddressLineTwo($form->get('addressLineTwo')->getData());
            }

            $user->setPassword(
                $userPasswordHasher->hashPassword(
                    $user,
                    $form->get('password')->getData()
                )
            );

            $entityManager->persist($user);
            $entityManager->flush();

            // generate a signed url and email it to the user
//            $this->emailVerifier->sendEmailConfirmation('app_verify_email', $user,
//                (new TemplatedEmail())
//                    ->from(new Address('crness2@gmail.com', 'T-shirt Design Company Bot'))
//                    ->to($user->getEmail())
//                    ->subject('Please Confirm your Email')
//                    ->htmlTemplate('registrationPage/confirmation_email.html.twig')
//            );
//            // do anything else you need here, like send an email

//            return $this->redirectToRoute('app_login');
        }

        return $this->json([
            'registrationForm' => $form->createView(),
        ]);
    }
//
//    #[Route('/verify/email', name: 'app_verify_email')]
//    public function verifyUserEmail(Request $request, UserRepository $userRepository): Response
//    {
//        $id = $request->get('id');
//
//        if (null === $id) {
//            return $this->redirectToRoute('app_register');
//        }
//
//        $user = $userRepository->find($id);
//
//        if (null === $user) {
//            return $this->redirectToRoute('app_register');
//        }
//
//        // validate email confirmation link, sets User::isVerified=true and persists
//        try {
//            $this->emailVerifier->handleEmailConfirmation($request, $user);
//        } catch (VerifyEmailExceptionInterface $exception) {
//            $this->addFlash('verify_email_error', $exception->getReason());
//
//            return $this->redirectToRoute('app_register');
//        }
//
//        // @TODO Change the redirect on success and handle or remove the flash message in your templates
//        $this->addFlash('success', 'Your email address has been verified.');
//
//        return $this->redirectToRoute('app_register');
//    }
}
