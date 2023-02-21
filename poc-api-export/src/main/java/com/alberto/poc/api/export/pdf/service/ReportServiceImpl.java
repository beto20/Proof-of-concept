package com.alberto.poc.api.export.pdf.service;

import com.alberto.poc.api.export.pdf.config.JasperReportManager;
import com.alberto.poc.api.export.pdf.model.Report;
import com.alberto.poc.api.export.pdf.model.ReportDto;
import lombok.RequiredArgsConstructor;
import net.sf.jasperreports.engine.JRException;
import org.springframework.stereotype.Service;

import javax.sql.DataSource;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.sql.SQLException;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class ReportServiceImpl implements ReportService {

    private final JasperReportManager jasperReportManager;
    private final DataSource dataSource;

    @Override
    public ReportDto getReport(Map<String, Object> params) throws SQLException, JRException, IOException {
        String filename = "report";
        ReportDto reportDto = new ReportDto();
        String extension = params.get("type").toString().equalsIgnoreCase(Report.EXCEL.name()) ? ".xlsx" : ".pdf";
        reportDto.setFilename(filename + extension);

        ByteArrayOutputStream stream = jasperReportManager.export(filename, params.get("type").toString(), params, dataSource.getConnection());

        byte[] bs = stream.toByteArray();
        reportDto.setStream(new ByteArrayInputStream(bs));
        reportDto.setLength(bs.length);

        return reportDto;
    }
}
