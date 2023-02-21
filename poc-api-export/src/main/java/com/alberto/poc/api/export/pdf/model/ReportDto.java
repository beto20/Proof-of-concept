package com.alberto.poc.api.export.pdf.model;

import lombok.Getter;
import lombok.Setter;

import java.io.ByteArrayInputStream;

@Getter
@Setter
public class ReportDto {

    private String filename;
    private ByteArrayInputStream stream;
    private int length;

}
