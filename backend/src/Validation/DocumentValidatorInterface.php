<?php

declare(strict_types=1);

namespace App\Validation;

use App\Model\ValidationResult;
use Smalot\PdfParser\Document;

interface DocumentValidatorInterface
{
    public function validate(Document $pdf, ValidationResult $result): void;
}
