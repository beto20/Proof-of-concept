package com.alberto.poc.api.export.pdf.controller;

import com.alberto.poc.api.export.pdf.model.Report;
import com.alberto.poc.api.export.pdf.model.ReportDto;
import com.alberto.poc.api.export.pdf.service.ReportService;
import lombok.RequiredArgsConstructor;
import net.sf.jasperreports.engine.JRException;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.sql.SQLException;
import java.util.Map;

@RestController
@RequestMapping("api/v1/reports")
@RequiredArgsConstructor
public class ReportController {

    private final ReportService reportService;

    @GetMapping("/download")
    public ResponseEntity<Resource> download(@RequestParam Map<String, Object> params) throws JRException, SQLException, IOException {
        ReportDto reportDto = reportService.getReport(params);
        InputStreamResource inputStreamResource = new InputStreamResource(reportDto.getStream());
        MediaType mediaType = null;
        if (params.get("type").toString().equalsIgnoreCase(Report.EXCEL.name())) {
            mediaType = MediaType.APPLICATION_OCTET_STREAM;
        } else {
            mediaType = MediaType.APPLICATION_PDF;
        }
        return ResponseEntity
                .ok()
                .header("Content-Disposition", "inline; filename=\"" + reportDto.getFilename() + "\"")
                .contentLength(reportDto.getLength())
                .contentType(mediaType)
                .body(inputStreamResource);

    }

}
