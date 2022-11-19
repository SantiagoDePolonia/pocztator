<?php

declare(strict_types=1);

namespace App\Model;

final class ValidationResult
{
    /**
     * @var ValidationError[]
    */
    private array $errors = [];

    public function addError(ValidationError $error): void
    {
        $this->errors[] = $error;
    }

    public function isValid(): bool
    {
        return empty($this->errors);
    }
}
