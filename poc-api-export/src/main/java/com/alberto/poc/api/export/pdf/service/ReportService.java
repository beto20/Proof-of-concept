package com.alberto.poc.api.export.pdf.service;

import com.alberto.poc.api.export.pdf.model.ReportDto;
import net.sf.jasperreports.engine.JRException;

import java.io.IOException;
import java.sql.SQLException;
import java.util.Map;

public interface ReportService {
    ReportDto getReport(Map<String, Object> params) throws SQLException, JRException, IOException;
}
