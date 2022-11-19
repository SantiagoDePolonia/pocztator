<?php

declare(strict_types=1);

namespace App\Validation;

use App\Model\ValidationResult;
use App\Validation\DocumentValidatorInterface;
use Smalot\PdfParser\Parser;

final class DocumentValidator
{
    /**
     * @var DocumentValidatorInterface[]
    */
    private iterable $validators;

    public function __construct(iterable $validators)
    {
        $this->validators = $validators;
    }

    public function validate(string $filePath): ValidationResult
{
        $parser = new Parser();
        $result = new ValidationResult();
        $pdf = $parser->parseFile($filePath);

        foreach ($this->validators as $validator) {
            $validator->validate($pdf, $result);
        }

        return $result;
    }
}
