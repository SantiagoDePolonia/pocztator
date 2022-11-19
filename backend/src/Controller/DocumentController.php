<?php

declare(strict_types=1);

namespace App\Controller;

use App\Validation\DocumentValidator;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class DocumentController extends AbstractController
{
    #[Route('/validate', name: 'app_validate')]
    public function validate(SerializerInterface $serializer, DocumentValidator $documentValidator, Request $request): JsonResponse
    {
        return $this->json($documentValidator->validate($request->files->get('file')->getPathName()));
    }
}
